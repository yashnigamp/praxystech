import { useState } from 'react'
import { Icon } from '../icons'

const faqs = [
  { q: 'Who actually does the work?', a: 'Senior and staff engineers with 8+ years in production. We do not staff junior engineers on client engagements. The team that scopes your project is the team that ships it.' },
  { q: 'How are engagements structured?', a: "We work in 12-week phases with weekly demos and a documented exit checkpoint. Most clients renew at the end of phase one; some don't — that's healthier than a multi-year contract." },
  { q: 'Do you sign NDAs?', a: 'Always. Most of our recent work cannot be discussed publicly. We can supply redacted case studies and reference calls under counter-NDA.' },
  { q: 'What about regulated environments?', a: 'We hold SOC 2 Type II, HIPAA, and PCI-DSS attestations. Our public-sector practice carries IL5 cleared engineers and works inside accredited cloud regions.' },
  { q: 'Can you work alongside our existing team?', a: "It's the default. We pair, embed, and code-review with your engineers from day one. Knowledge transfer is verified by their ability to operate the system without us." },
  { q: 'How fast can we start?', a: 'Q3 2026 has open capacity for two new engagements. Discovery typically begins 2–3 weeks after MSA signature.' },
]

function FAQItem({ q, a, open, onClick, idx }) {
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button onClick={onClick} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 0', textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>{String(idx + 1).padStart(2, '0')}</span>
          <span className="serif" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', letterSpacing: '-0.02em' }}>{q}</span>
        </div>
        <span style={{ width: 40, height: 40, borderRadius: 999, border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: open ? 'var(--ink)' : 'transparent', color: open ? 'var(--paper)' : 'var(--ink)', transition: 'all .3s' }}>
          {open ? <Icon.minus size={14} /> : <Icon.plus size={14} />}
        </span>
      </button>
      <div style={{ overflow: 'hidden', maxHeight: open ? 320 : 0, opacity: open ? 1 : 0, transition: 'max-height .5s cubic-bezier(0.16,1,0.3,1), opacity .35s' }}>
        <p style={{ paddingBottom: 32, paddingLeft: 56, fontSize: 17, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 760 }}>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" style={{ padding: '140px 0', background: 'var(--paper)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }} className="faq-grid">
          <div style={{ position: 'sticky', top: 120 }} className="faq-sticky">
            <div className="eyebrow" style={{ color: 'var(--muted)' }}>(08) — Frequently asked</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 4.6vw, 72px)', lineHeight: 1, letterSpacing: '-0.025em', marginTop: 24 }}>
              The <span className="serif-i">honest</span> answers.
            </h2>
            <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 320 }}>
              Anything else, ask us directly. We don't run a sales floor.
            </p>
          </div>
          <div>
            {faqs.map((f, i) => (
              <FAQItem key={f.q} idx={i} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) { .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .faq-sticky { position: relative !important; top: auto !important; } }
      `}</style>
    </section>
  )
}
