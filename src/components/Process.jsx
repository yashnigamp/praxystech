import { useState, useEffect } from 'react'

const steps = [
  { n: '01', label: 'Discovery', title: 'We learn the system before touching the code.', body: 'Two weeks embedded with your team. We map the real architecture, the unwritten rules, and the political topology — because every legacy estate has both.', bullets: ['Architecture audit', 'Stakeholder interviews', 'Risk register', 'Engineering handoff plan'] },
  { n: '02', label: 'Architecture', title: 'A target architecture you can defend in a board meeting.', body: 'Decisions documented as ADRs. Trade-offs made in the open. A migration plan with reversible checkpoints, not a big-bang gamble.', bullets: ['Target diagrams', 'ADR log', 'Cost model', 'Cutover plan'] },
  { n: '03', label: 'Build', title: 'Senior engineers shipping production code, weekly.', body: 'Trunk-based, fully observable, deployed behind feature flags. You see staging on day three and a real cutover on day thirty.', bullets: ['Weekly demo', 'Live observability', 'Code ownership', 'Pair programming'] },
  { n: '04', label: 'Operate', title: 'We stay on call until your team owns it.', body: 'Praxys engineers carry pagers next to your team for the first 90 days post-launch. Knowledge transfer is verified by absence, not slides.', bullets: ['Shared on-call', 'Runbooks', 'Postmortems', 'Skill-up sessions'] },
]

export default function Process() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const els = steps.map((_, i) => document.getElementById(`process-step-${i}`))
      const mid = window.innerHeight / 2
      let nearest = 0, nd = Infinity
      els.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const d = Math.abs(r.top + r.height / 2 - mid)
        if (d < nd) { nd = d; nearest = i }
      })
      setActive(nearest)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="process" style={{ background: 'var(--ink)', color: 'var(--paper)', position: 'relative' }}>
      <div className="grain" style={{ opacity: 0.18, position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', paddingTop: 140, paddingBottom: 140 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)' }}>(03) — Engagement model</span>
          <span style={{ width: 60, height: 1, background: 'rgba(245,242,236,0.3)' }} />
        </div>
        <h2 className="serif" style={{ fontSize: 'clamp(44px, 6vw, 96px)', lineHeight: 0.98, letterSpacing: '-0.025em', maxWidth: 1100, marginBottom: 96 }}>
          Four phases. <span className="serif-i" style={{ color: 'var(--accent)' }}>No handoffs.</span> The team that scopes your project ships it and stays through the first 90 days of operations.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="proc-grid">
          <div style={{ position: 'sticky', top: 0, alignSelf: 'start', height: '100vh', display: 'flex', alignItems: 'center' }} className="proc-sticky">
            <div style={{ border: '1px solid var(--line-dark)', borderRadius: 18, padding: 20, background: 'var(--ink-2)', display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxHeight: 'calc(100vh - 48px)' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.14em' }}>
                CURRENT PHASE — {String(active + 1).padStart(2, '0')} / 04
              </div>
              <div style={{ position: 'relative', aspectRatio: '1/1', width: '100%', maxWidth: 240, marginInline: 'auto' }}>
                <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                  <circle cx="100" cy="100" r="90" fill="none" stroke="var(--ink-3)" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="var(--accent)" strokeWidth="2"
                    strokeDasharray={`${((active + 1) / 4) * 565.48} 565.48`}
                    style={{ transition: 'stroke-dasharray 0.6s cubic-bezier(0.16,1,0.3,1)' }} />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 20 }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.18em' }}>{steps[active].label.toUpperCase()}</div>
                  <div className="serif" style={{ fontSize: 64, lineHeight: 1, marginTop: 4, color: 'var(--paper)' }}>{steps[active].n}</div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--muted-2)', marginTop: 10 }}>
                    week {[2, 4, 12, 26][active]} → {[4, 12, 26, 38][active]}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {steps.map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i <= active ? 'var(--accent)' : 'var(--ink-3)', transition: 'background 0.4s' }} />
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
            {steps.map((s, i) => (
              <div key={s.n} id={`process-step-${i}`} style={{ minHeight: 360 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.18em', marginBottom: 16 }}>PHASE {s.n} / {s.label.toUpperCase()}</div>
                <h3 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{s.title}</h3>
                <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.6, color: 'var(--muted-2)', maxWidth: 520 }}>{s.body}</p>
                <ul style={{ listStyle: 'none', marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 520 }}>
                  {s.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--paper)' }}>
                      <span style={{ width: 14, height: 14, borderRadius: 999, border: '1px solid var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)' }} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .proc-grid { grid-template-columns: 1fr !important; gap: 60px !important; } .proc-sticky { position: relative !important; top: auto !important; height: auto !important; } }
      `}</style>
    </section>
  )
}
