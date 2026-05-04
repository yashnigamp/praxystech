import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Proof from './components/Proof'
import Capabilities from './components/Capabilities'
import Process from './components/Process'
import Work from './components/Work'
import Industries from './components/Industries'
import Stack from './components/Stack'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'

export default function App() {
  const [quote, setQuote] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('praxys_scope_popup_shown')) return
    const target = document.getElementById('process')
    if (!target) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuote(true)
          sessionStorage.setItem('praxys_scope_popup_shown', '1')
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(target)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Header onQuote={() => setQuote(true)} />
      <main>
        <Hero onQuote={() => setQuote(true)} />
        <Proof />
        <Capabilities />
        <Process onQuote={() => setQuote(true)} />
        <Work />
        <Industries />
        <Stack />
        <Testimonials />
        <FAQ />
        <CTA onQuote={() => setQuote(true)} />
      </main>
      <Footer />
      <QuoteModal open={quote} onClose={() => setQuote(false)} />
    </>
  )
}
