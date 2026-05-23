import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function InboxMockup() {
  return (
    <div className="features-inbox-mock" aria-hidden="true">
      <div className="features-sidebar-card">
        <span>MY INBOX</span>
        <p>Website chat</p>
        <p>WhatsApp</p>
        <p>Email support</p>
      </div>
      <div className="features-chat-card">
        <span>Customer</span>
        <p>Can I change my delivery address?</p>
        <strong>Eco answered</strong>
      </div>
    </div>
  )
}

function TrainingMockup() {
  return (
    <div className="features-training-mock" aria-hidden="true">
      <div className="features-bars">
        <span />
        <span />
        <span />
      </div>
      <div className="features-doc-list">
        <div>
          <strong>FAQs</strong>
          <span>126 answers</span>
        </div>
        <div>
          <strong>Policies</strong>
          <span>42 rules</span>
        </div>
        <div>
          <strong>Products</strong>
          <span>Synced today</span>
        </div>
      </div>
      <div className="features-score">
        <span>94%</span>
        <small>trained</small>
      </div>
    </div>
  )
}

function AnalyticsMockup() {
  const rows = ['Shipping delay', 'Refund request', 'Pricing question']

  return (
    <div className="features-analytics-mock" aria-hidden="true">
      <div className="features-timeline">
        <span>09:00</span>
        <span>12:00</span>
        <span>15:00</span>
        <span>18:00</span>
      </div>
      <div className="features-ticket-board">
        {rows.map((row, index) => (
          <div key={row} className={`features-ticket is-${index + 1}`}>
            <strong>{row}</strong>
            <span>{index === 0 ? 'Resolved' : 'Learning'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WidgetMockup() {
  return (
    <div className="features-widget-mock" aria-hidden="true">
      <div className="features-widget-paper is-left">Themes</div>
      <div className="features-widget-timer">
        <span>Eco</span>
        <strong>24/7</strong>
      </div>
      <div className="features-widget-paper is-right">Channels</div>
    </div>
  )
}

export default function Features() {
  const sectionRef = useRef()

  useGSAP(() => {
    gsap.utils.toArray('.features-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 48,
        scale: 0.98,
        duration: 0.75,
        delay: index * 0.07,
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
    <section id="features" ref={sectionRef} className="features-section">
      <div className="features-container">
        <div className="features-heading">
          <span className="features-pill">Features</span>
          <h2>Keep every conversation in one place</h2>
          <p>Forget scattered support tools. Eco brings answers, training, channels, and insight into one calm workspace.</p>
        </div>

        <div className="features-grid">
          <article className="features-card">
            <InboxMockup />
            <div className="features-card-copy">
              <h3>Unified customer inbox</h3>
              <p>Work across web chat, WhatsApp, and email from one shared view, with Eco handling the first response.</p>
            </div>
          </article>

          <article className="features-card features-card-wide">
            <TrainingMockup />
            <div className="features-card-copy">
              <h3>Business-aware training</h3>
              <p>Upload docs, crawl your site, and refine answers so Eco knows your policies, product details, and tone.</p>
            </div>
          </article>

          <article className="features-card features-card-large">
            <div className="features-card-copy is-side">
              <h3>Advanced conversation analytics</h3>
              <p>See what customers ask, which answers convert, and where your team should improve the support flow.</p>
            </div>
            <AnalyticsMockup />
          </article>

          <article className="features-card features-card-dashed">
            <WidgetMockup />
            <div className="features-card-copy">
              <h3>Customizable chat widgets</h3>
              <p>Match Eco to your brand, choose the right channels, and launch a polished assistant anywhere.</p>
            </div>
          </article>
        </div>

        <p className="features-more">and a lot more features...</p>
      </div>
    </section>
  )
}
