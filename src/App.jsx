import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

/* AIDA order: Attention, Interest, Desire, Action. */
export default function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  )
}
