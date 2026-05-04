import { Icon } from '../icons'

export default function CTA({ onQuote }) {
  return (
    <section style={{ padding: '140px 0', background: 'var(--ink)', color: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      <div className="grain" style={{ opacity: 0.18 }} />
      <div style={{ position: 'absolute', top: '50%', right: '-220px', width: 560, height: 560, borderRadius: 999, border: '1px solid var(--line-dark)', transform: 'translateY(-50%)' }} />
      <div style={{ position: 'absolute', top: '50%', right: '-120px', width: 380, height: 380, borderRadius: 999, border: '1px solid var(--line-dark)', transform: 'translateY(-50%)' }} />
      <div style={{ position: 'absolute', top: '50%', right: '40px', width: 110, height: 110, borderRadius: 999, background: 'var(--accent)', transform: 'translateY(-50%)' }} className="pulse-soft" />

      <div className="container" style={{ position: 'relative' }}>
        <div className="eyebrow" style={{ color: 'var(--accent)' }}>(09) — Engagement</div>
        <h2 className="serif" style={{ fontSize: 'clamp(48px, 7vw, 130px)', lineHeight: 0.95, letterSpacing: '-0.03em', marginTop: 24, maxWidth: 1200 }}>
          Have a system that <span className="serif-i" style={{ color: 'var(--accent)' }}>cannot fail?</span><br />
          Let's talk.
        </h2>
        <p style={{ marginTop: 32, fontSize: 18, color: 'var(--muted-2)', maxWidth: 560, lineHeight: 1.6 }}>
          Two engagement slots open for Q3 2026. A 30-minute call with a partner — no decks, no SDRs, no follow-up cadence.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={onQuote}>Scope a project <Icon.arrow size={14} /></button>
          <a href="mailto:partners@praxystech.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--paper)', padding: '16px 24px', borderRadius: 999, fontWeight: 500, fontSize: 15, border: '1px solid var(--line-dark)' }}>
            partners@praxystech.com <Icon.arrowUR size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
