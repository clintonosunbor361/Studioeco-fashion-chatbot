# Eco Landing Page — Build Instructions

## Project
Landing page for Eco — an AI chatbot product by Studio Eco.
Built with React + Vite + Tailwind + GSAP.

## Design System
Always read DESIGN.md before writing any component.
Apply all color tokens, typography, spacing, and component styles from DESIGN.md consistently.

## Page Structure
Follow the AIDA framework in this exact order:

1. Navigation
2. Hero (Attention)
3. Features/Bento (Interest)
4. How it works (Desire)
5. Testimonials (Desire)
6. Pricing (Desire)
7. CTA Section (Action)
8. Footer (Action)

## Navigation
- Fixed position, full width
- Transparent on load
- On scroll past 80px: frosted glass pill centered, backdrop-filter blur(18px), background rgba(244,243,238,0.85)
- Logo left: "studio" small above "eco" wordmark
- Links: Features, How it works, Pricing
- CTA button right: "Get early access" — forest green pill button

## Hero Section
- Full viewport height (100svh)
- Massive headline — 2 lines maximum, never more
- Use clamp(3rem, 6vw, 6rem) for font size
- Subheadline below in muted color, max 2 sentences
- Two CTAs: primary (Get early access) and secondary (Watch demo)
- Subtle background: warm off-white with a soft radial green glow at very low opacity
- GSAP: headline words stagger in from y:60px opacity:0 on page load

## Features Bento Grid
- 3-4 cards in a gapless CSS grid
- Use grid-auto-flow: dense — no empty cells
- Mix of large and small cards
- Each card: surface background, 1px border, 8px radius
- Features to highlight:
  - Always available — 24/7 instant responses
  - Knows your business — trained on your data
  - Works everywhere — web, WhatsApp, email
  - Gets smarter — learns from every conversation
- GSAP ScrollTrigger: cards scale from 0.95 to 1.0 and fade in as they enter viewport

## How It Works
- 3 steps: Connect → Train → Deploy
- Numbered with large Geist Mono style numbers
- Each step has a title and 1-2 sentence description
- GSAP ScrollTrigger: pin the section heading on the left while steps scroll on the right

## Testimonials
- 2-3 quotes from fictional but believable users
- Clean card layout, name and company below each quote
- Subtle warm surface background

## Pricing
- 2 tiers: Starter and Pro
- Clean card layout, forest green highlight on Pro tier
- Simple feature list per tier

## CTA Section
- Large headline: "Ready to meet Eco?"
- Single primary button: "Get early access"
- Warm background with subtle texture

## Footer
- Logo left
- Links: Features, Pricing, About, Contact
- "Lagos, Nigeria · working globally" tagline
- Geist Mono style for metadata

## GSAP Rules
- Always import from gsap and @gsap/react
- Always register ScrollTrigger plugin
- Use useGSAP hook for all animations
- Wrap all ScrollTrigger animations in a scrollTrigger config object
- Add will-change: transform to animated elements for performance

## Code Rules
- One component per file in src/components/
- No inline styles — use Tailwind classes and CSS variables only
- All images use picsum.photos with relevant keywords
- Mobile responsive — single column below 768px
- No TypeScript — plain JavaScript only
- Clean readable code with comments explaining each section