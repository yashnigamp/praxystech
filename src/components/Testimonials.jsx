import { Icon } from '../icons'

const quotes = [
  { q: "They didn't just deliver a system — they left our engineering team materially stronger than they found it.", who: 'Mariana Velasquez', role: 'CTO, Atlas Bank' },
  { q: "We've worked with the big consultancies. Praxys is the first vendor whose senior people actually wrote production code.", who: 'David Chen', role: 'SVP Engineering, Vesper' },
  { q: "They cut over a 14-year-old monolith on a Saturday afternoon. We noticed Monday morning. That's the bar.", who: 'Aoife Brennan', role: 'Head of Platform, Meridian' },
  { q: "Most vendors leave you with slides. Praxys left us with runbooks, ADRs, and engineers who could keep building.", who: 'Samuel Okafor', role: 'VP Technology, Praxis Health' },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '140px 0', background: 'var(--paper)', overflow: 'hidden' }}>
      <div className="container">
        <div className="eyebrow" style={{ color: 'var(--muted)' }}>(07) — In their words</div>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.5vw, 84px)', lineHeight: 0.98, letterSpacing: '-0.025em', marginTop: 24, maxWidth: 1100 }}>
          Operators we've worked with, on what <span className="serif-i">it actually felt like.</span>
        </h2>
      </div>
      <div style={{ marginTop: 80, overflow: 'hidden' }}>
        <div className="marquee-track" style={{ animationDuration: '60s', gap: 24 }}>
          {[...quotes, ...quotes].map((t, i) => (
            <div key={i} style={{ flex: '0 0 auto', width: 'min(440px, 80vw)', padding: 36, background: 'var(--paper-2)', borderRadius: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 320 }}>
              <div>
                <div style={{ display: 'flex', gap: 4, color: 'var(--ink)', marginBottom: 24 }}>
                  {[0,1,2,3,4].map(s => <Icon.star key={s} size={14} />)}
                </div>
                <p className="serif" style={{ fontSize: 24, lineHeight: 1.25, letterSpacing: '-0.015em' }}>"{t.q}"</p>
              </div>
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{t.who}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
