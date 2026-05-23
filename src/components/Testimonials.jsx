import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const integrations = ['Drive', 'Shopify', 'Jira', 'Gmail', 'Figma', 'Outlook', 'Slack', 'Salesforce', 'Zendesk', 'HubSpot', 'Intercom', 'Calendar']

const testimonials = [
  {
    quote: 'Eco now handles our repetitive support questions before the team even opens the inbox.',
    name: 'Amara O.',
    role: 'Founder, ShopNaija',
    tone: 'is-blue',
  },
  {
    quote: 'The training flow is simple enough for operations, but the answers still feel accurate and on-brand.',
    name: 'Tobi A.',
    role: 'CEO, Nemo Digital',
    tone: 'is-orange',
  },
  {
    quote: 'We connected web chat and WhatsApp in a day. Customers get help faster and our team has less noise.',
    name: 'Chisom E.',
    role: 'Head of Ops, Zuri Health',
    tone: 'is-green',
  },
  {
    quote: 'The analytics make it obvious what customers are confused about. Eco became part of our weekly review.',
    name: 'Sarah K.',
    role: 'CX Lead, BloomCart',
    tone: 'is-purple',
  },
]

function IntegrationGrid() {
  return (
    <div className="social-integrations-grid" aria-hidden="true">
      <span className="social-mini-app">
        <i />
        <i />
        <i />
        <i />
      </span>
      {integrations.map((name, index) => (
        <div key={name} className={`social-integration-card is-${index % 6}`}>
          {name.slice(0, 1)}
        </div>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef()

  useGSAP(() => {
    gsap.utils.toArray('.social-card, .social-integration-card').forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 34,
        scale: 0.98,
        duration: 0.7,
        delay: index * 0.035,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 86%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="social-section">
      <div className="social-container">
        <div className="social-heading">
          <span className="features-pill">Integrations</span>
          <h2>Connect the tools your customers already use</h2>
        </div>

        <IntegrationGrid />

        <div className="social-heading social-testimonial-heading">
          <span className="features-pill">Testimonials</span>
          <h2>Support teams are already using Eco</h2>
        </div>

        <div className="social-testimonial-grid">
          {testimonials.map((item) => (
            <article className="social-card" key={item.name}>
              <p>"{item.quote}"</p>
              <div>
                <span className={item.tone} />
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </div>
              </div>
            </article>
          ))}

          <article className="social-card social-video-card">
            <img src="https://picsum.photos/seed/eco-customer-video/520/620" alt="Eco customer video review" />
            <a href="#cta">Watch video review</a>
          </article>
        </div>
      </div>
    </section>
  )
}
