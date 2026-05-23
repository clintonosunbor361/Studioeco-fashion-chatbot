import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function DotLogo() {
  return (
    <span className="floating-nav-logo-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  )
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#how-it-works' },
  { label: 'Channels', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Nav() {
  const navRef = useRef()
  const [scrolled, setScrolled] = useState(false)

  useGSAP(() => {
    ScrollTrigger.create({
      start: 80,
      end: 99999,
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    })

    gsap.from(navRef.current, {
      opacity: 0,
      y: -16,
      duration: 0.65,
      ease: 'power2.out',
    })
  }, { scope: navRef })

  return (
    <header className={`floating-nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <nav ref={navRef} className="floating-nav" aria-label="Site navigation">
        <a href="#hero" className="floating-nav-brand" aria-label="Eco home">
          <DotLogo />
          <span>Eco</span>
        </a>

        <div className="floating-nav-links">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="floating-nav-actions">
          <a href="#cta" className="floating-nav-signin">Sign in</a>
          <a href="#cta" className="floating-nav-demo">Get demo</a>
        </div>
      </nav>
    </header>
  )
}
