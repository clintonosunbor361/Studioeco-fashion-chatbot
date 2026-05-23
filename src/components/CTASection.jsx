import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function CTASection() {
  const sectionRef = useRef()

  useGSAP(() => {
    gsap.from('.final-cta-card', {
      opacity: 0,
      y: 44,
      scale: 0.98,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
        toggleActions: 'play none none reverse',
      },
    })
  }, { scope: sectionRef })

  return (
    <section id="cta" ref={sectionRef} className="final-cta-section">
      <div className="final-cta-card">
        <span className="features-pill">Get started</span>
        <h2>Ready to put Eco on your team?</h2>
        <p>Launch a chatbot that knows your business, answers instantly, and keeps customer support moving.</p>
        <div>
          <a href="#hero">Get free demo</a>
          <a href="#pricing">View pricing</a>
        </div>
      </div>
    </section>
  )
}
