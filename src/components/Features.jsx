import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const features = [
  {
    title: 'Always on',
    copy: 'Answers customer enquiries 24/7, even when your team is offline.',
    icon: '24',
    mockup: <AlwaysOnMockup />,
  },
  {
    title: 'Trained on your business',
    copy: 'Update your knowledge base in a Google Sheet. Eco reflects the changes instantly.',
    icon: 'KB',
    mockup: <SheetMockup />,
    wide: true,
  },
  {
    title: 'Never guesses',
    copy: "If Eco doesn't know the answer, it captures the customer's name and contact and flags it for your team.",
    icon: 'OK',
    mockup: <HandoffMockup />,
  },
  {
    title: 'Speaks your language',
    copy: 'Eco responds in your tone: warm, professional, and on-brand.',
    icon: 'Hi',
    mockup: <ToneMockup />,
  },
  {
    title: 'One line of code',
    copy: 'Embed Eco on any website in minutes. No technical knowledge needed.',
    icon: '</>',
    mockup: <CodeMockup />,
    wide: true,
  },
]

function AlwaysOnMockup() {
  return (
    <div className="features-live-mock" aria-hidden="true">
      <div className="features-orbit-clock">24/7</div>
      <div className="features-chat-card is-live">
        <span>11:48 PM</span>
        <p>Do you deliver tomorrow?</p>
        <strong>Eco answered instantly</strong>
      </div>
    </div>
  )
}

function SheetMockup() {
  return (
    <div className="features-sheet-mock" aria-hidden="true">
      <div className="features-sheet-window">
        <div>
          <span>Question</span>
          <span>Answer</span>
          <span>Status</span>
        </div>
        <div>
          <strong>Return policy</strong>
          <span>14 days</span>
          <em>Synced</em>
        </div>
        <div>
          <strong>Delivery fee</strong>
          <span>By location</span>
          <em>Synced</em>
        </div>
        <div>
          <strong>Store hours</strong>
          <span>9am - 6pm</span>
          <em>Synced</em>
        </div>
      </div>
    </div>
  )
}

function HandoffMockup() {
  return (
    <div className="features-handoff-mock" aria-hidden="true">
      <div className="features-alert-card">
        <span>Needs team reply</span>
        <strong>Wholesale order request</strong>
        <p>Name and contact captured</p>
      </div>
      <div className="features-ticket is-flagged">
        <strong>Flagged</strong>
        <span>Human review</span>
      </div>
    </div>
  )
}

function ToneMockup() {
  return (
    <div className="features-tone-mock" aria-hidden="true">
      <div className="features-tone-pill is-warm">Warm</div>
      <div className="features-tone-pill is-pro">Professional</div>
      <div className="features-tone-card">Hi there, I can help with that.</div>
    </div>
  )
}

function CodeMockup() {
  return (
    <div className="features-code-mock" aria-hidden="true">
      <div className="features-code-window">
        <span>{'<script'}</span>
        <strong>src="eco/widget.js"</strong>
        <span>{'defer></script>'}</span>
      </div>
      <div className="features-widget-timer">
        <span>Live</span>
        <strong>1</strong>
      </div>
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
        delay: index * 0.06,
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
          <h2>How can Eco Help me?</h2>
          <p>Eco keeps your customer support responsive, accurate, and easy to update without adding more operational weight.</p>
        </div>

        <div className="features-grid">
          {features.map(({ title, copy, icon, mockup, wide }) => (
            <article key={title} className={`features-card ${wide ? 'features-card-wide' : ''}`}>
              <div className="features-card-icon">{icon}</div>
              {mockup}
              <div className="features-card-copy">
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
