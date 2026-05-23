import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

function MiniAppIcon() {
  return (
    <div className="chat-hero-mini-app hero-float" aria-hidden="true">
      <span className="is-cyan" />
      <span />
      <span />
      <span />
    </div>
  )
}

function ChatBadge() {
  return (
    <div className="chat-hero-badge" aria-hidden="true">
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <rect width="42" height="42" rx="9" fill="url(#chatBadgeGradient)" />
        <path d="M12 15.5h18M12 21h12M16 31l-4 3v-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="chatBadgeGradient" x1="7" y1="5" x2="35" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#48d9f5" />
            <stop offset="1" stopColor="#1f7ded" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function StickyNote() {
  return (
    <div className="chat-hero-note hero-float" aria-hidden="true">
      <div className="chat-hero-paper" />
      <div className="chat-hero-sticky">
        <span />
        <p>Train Eco on your FAQs, products, policies, and tone in minutes.</p>
      </div>
      <ChatBadge />
    </div>
  )
}

function KnowledgeCard() {
  return (
    <div className="chat-hero-knowledge hero-float" aria-hidden="true">
      <div className="chat-hero-bot">
        <span />
      </div>
      <div className="chat-hero-knowledge-sheet">
        <p>Knowledge base</p>
        <div className="chat-hero-pill" />
        <div className="chat-hero-update">
          <strong>New answers learned</strong>
          <span>Eco synced your help center</span>
          <small>Ready now</small>
        </div>
      </div>
    </div>
  )
}

function ConversationCard() {
  const rows = [
    ['24', 'Order status question', '92%', 'is-orange'],
    ['18', 'Pricing plan answer', '100%', 'is-green'],
  ]

  return (
    <div className="chat-hero-conversations hero-float" aria-hidden="true">
      <h3>Live conversations</h3>
      {rows.map(([count, title, rate, tone]) => (
        <div className="chat-hero-row" key={title}>
          <span className={tone}>{count}</span>
          <div>
            <p>{title}</p>
            <small>Resolved by Eco</small>
          </div>
          <div className="chat-hero-progress">
            <i />
          </div>
          <em>{rate}</em>
        </div>
      ))}
    </div>
  )
}

function IntegrationsCard() {
  return (
    <div className="chat-hero-integrations hero-float" aria-hidden="true">
      <h3>100+ Integrations</h3>
      <div className="chat-hero-channel-icons">
        <span className="gmail">M</span>
        <span className="whatsapp">W</span>
        <span className="mail">@</span>
      </div>
    </div>
  )
}

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

    gsap.from('.chat-hero-word', {
      y: 62,
      opacity: 0,
      duration: 0.9,
      stagger: 0.055,
      ease: 'power3.out',
      delay: 0.22,
    })

    gsap.from('.hero-float', {
      opacity: 0,
      y: 24,
      duration: 0.75,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 0.5,
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
          <StickyNote />
          <MiniAppIcon />
          <KnowledgeCard />
          <ConversationCard />
          <IntegrationsCard />

          <div className="chat-hero-copy">
            <h1>
              <span>
                <HeadlineWords>Answer, support, and sell</HeadlineWords>
              </span>
              <span>
                <HeadlineWords muted>all in one chat</HeadlineWords>
              </span>
            </h1>
            <p className="chat-hero-sub">
              Eco learns your business and gives every customer an instant, helpful answer.
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
