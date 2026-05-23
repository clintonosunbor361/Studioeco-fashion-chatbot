import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const steps = [
  {
    icon: '01',
    title: 'Connect your sources',
    description: 'Add your website, help center, PDFs, and product docs so Eco can understand the business context.',
  },
  {
    icon: '02',
    title: 'Train the assistant',
    description: 'Review suggested answers, set tone rules, and approve the responses customers should receive.',
  },
  {
    icon: '03',
    title: 'Launch everywhere',
    description: 'Embed Eco on your site and connect WhatsApp or email so customers get instant help on every channel.',
  },
]

function ProductMockup() {
  return (
    <div className="how-product-mock" aria-hidden="true">
      <aside className="how-sidebar">
        <div className="how-logo-row">
          <span />
          <strong>Eco</strong>
        </div>
        {['Inbox', 'Knowledge', 'Training', 'Channels', 'Analytics'].map((item, index) => (
          <p key={item} className={index === 1 ? 'is-active' : ''}>
            {item}
          </p>
        ))}
      </aside>

      <main className="how-dashboard">
        <div className="how-dashboard-top">
          <span>Good morning, Amanda</span>
          <button>Customize</button>
        </div>

        <div className="how-dashboard-grid">
          <div className="how-panel how-panel-large">
            <h3>Training checklist</h3>
            {['Website crawled', 'FAQs imported', 'Tone rules approved'].map((item, index) => (
              <div className="how-check-row" key={item}>
                <span className={index === 2 ? '' : 'is-done'} />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="how-panel how-timer">
            <h3>Setup time</h3>
            <strong>04:21</strong>
            <div>
              <span />
              <span />
            </div>
          </div>

          <div className="how-panel how-activity">
            <h3>Activity</h3>
            <div className="how-rings">
              <span />
            </div>
            <p>87% resolved</p>
          </div>

          <div className="how-panel how-assigned">
            <h3>Recent answers</h3>
            {['Delivery policy', 'Refund window', 'Pro pricing'].map((item, index) => (
              <div className="how-answer-row" key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
                <i />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default function HowItWorks() {
  const sectionRef = useRef()

  useGSAP(() => {
    gsap.utils.toArray('.how-step-card, .how-product-wrap').forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 42,
        scale: 0.98,
        duration: 0.75,
        delay: index * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 84%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section id="how-it-works" ref={sectionRef} className="how-section">
      <div className="how-container">
        <div className="how-heading">
          <span className="features-pill">Solutions</span>
          <h2>Launch your AI support assistant in three steps</h2>
        </div>

        <div className="how-step-grid">
          {steps.map((step) => (
            <article className="how-step-card" key={step.title}>
              <span>{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="how-product-wrap">
          <span className="how-float-card is-left">20</span>
          <span className="how-float-card is-right">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <rect width="34" height="34" rx="8" fill="#29c7c2" />
              <path d="M9 17.5l5 5L25 11.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <ProductMockup />
        </div>
      </div>
    </section>
  )
}
