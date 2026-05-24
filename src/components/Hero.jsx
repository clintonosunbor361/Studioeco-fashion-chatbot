import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

function HeadlineWords({ children, muted = false }) {
  return children.split(' ').map((word, index) => (
    <span key={`${word}-${index}`} className={`chat-hero-word ${muted ? 'is-muted' : ''}`}>
      {word}
    </span>
  ))
}

export default function Hero() {
  const heroRef = useRef()

  useGSAP(() => {
    gsap.from('.chat-hero-shell', {
      opacity: 0,
      y: 34,
      scale: 0.985,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.from('.chat-hero-line:not(.is-emphasis) .chat-hero-word', {
      y: 62,
      opacity: 0,
      duration: 0.9,
      stagger: 0.055,
      ease: 'power3.out',
      delay: 0.22,
    })

    gsap.from('.chat-hero-line.is-emphasis .chat-hero-word', {
      y: 78,
      opacity: 0,
      scale: 0.94,
      duration: 0.95,
      stagger: 0.075,
      ease: 'power3.out',
      delay: 0.48,
    })

    gsap.from('.chat-hero-highlight', {
      scaleX: 0,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      delay: 0.95,
      transformOrigin: 'left center',
    })

    gsap.from('.chat-hero-sub', {
      y: 18,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      delay: 0.78,
    })
  }, { scope: heroRef })

  return (
    <section id="hero" ref={heroRef} className="chat-hero">
      <div className="chat-hero-shell">
        <div className="chat-hero-stage">
          <div className="chat-hero-copy">
            <h1>
              <span className="chat-hero-line">
                <HeadlineWords>Tired of answering the same</HeadlineWords>
              </span>
              <span className="chat-hero-line is-emphasis">
                <HeadlineWords muted>questions over and over?</HeadlineWords>
                <span className="chat-hero-highlight" aria-hidden="true" />
              </span>
            </h1>
            <p className="chat-hero-sub">
              Meet Eco, your 24/7 customer assistant that answers customer enquiries exactly how you would answer it.
            </p>
            <a href="#cta" className="chat-hero-cta chat-hero-sub">
              Get free demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
