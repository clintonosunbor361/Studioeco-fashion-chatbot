import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    description: 'For small teams launching their first AI support assistant.',
    cta: 'Get started',
    features: ['1,000 conversations/mo', 'Web chat widget', 'Document training', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$89',
    description: 'For growing teams that want every channel connected.',
    cta: 'Get demo',
    popular: true,
    features: ['Unlimited conversations', 'Web, WhatsApp, and email', 'Live website crawl', 'Advanced analytics', 'Priority support', 'API access'],
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.2l3.3 3.3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  const sectionRef = useRef()

  useGSAP(() => {
    gsap.utils.toArray('.plans-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 42,
        scale: 0.98,
        duration: 0.75,
        delay: index * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 84%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section id="pricing" ref={sectionRef} className="plans-section">
      <div className="plans-container">
        <div className="plans-heading">
          <span className="features-pill">Pricing</span>
          <h2>Simple plans for every support team</h2>
          <p>Start small, connect more channels as you grow, and keep every customer answer consistent.</p>
        </div>

        <div className="plans-grid">
          {tiers.map((tier) => (
            <article className={`plans-card ${tier.popular ? 'is-popular' : ''}`} key={tier.name}>
              {tier.popular && <span className="plans-badge">Most popular</span>}
              <div className="plans-top">
                <h3>{tier.name}</h3>
                <p>{tier.description}</p>
              </div>

              <div className="plans-price">
                <strong>{tier.price}</strong>
                <span>/month</span>
              </div>

              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#cta">{tier.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
