const cols = [
  { h: 'Studio', items: ['Capabilities', 'Process', 'Selected work', 'Industries', 'Tech stack'] },
  { h: 'Practice', items: ['Platform engineering', 'Applied AI', 'Product engineering', 'Security & compliance', 'Modernisation'] },
  { h: 'Contact', items: ['partners@praxystech.com', '+1 (415) 555-0144', 'San Francisco · London', 'Singapore'] },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ overflow: 'hidden', borderBottom: '1px solid var(--line-dark)' }}>
        <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(120px, 28vw, 460px)', lineHeight: 0.85, letterSpacing: '-0.05em', padding: '40px 0 20px', textAlign: 'center', whiteSpace: 'nowrap' }} className="no-select">
          praxys<span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>.</span>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48 }} className="foot-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, background: 'var(--paper)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="serif-i" style={{ color: 'var(--ink)', fontSize: 26, lineHeight: 1, marginTop: -2 }}>p</span>
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600 }}>Praxys</div>
                <div className="mono" style={{ fontSize: 9, color: 'var(--muted-2)', letterSpacing: '0.14em' }}>TECHNOLOGY</div>
              </div>
            </div>
            <p style={{ marginTop: 24, fontSize: 15, color: 'var(--muted-2)', lineHeight: 1.6, maxWidth: 320 }}>
              A senior-only software studio for ambitious enterprises. Working under NDA across finance, healthcare, and logistics since 2009.
            </p>
            <div className="mono" style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--muted-2)', padding: '8px 12px', border: '1px solid var(--line-dark)', borderRadius: 999 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#22c55e' }} className="pulse-soft" />
              ALL SYSTEMS NOMINAL · 99.992%
            </div>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.items.map(it => (
                  <li key={it}>
                    <a href="#" style={{ fontSize: 15, color: 'var(--paper)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--paper)'}
                    >{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 64, paddingTop: 28, borderTop: '1px solid var(--line-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.08em' }}>
            © 2026 Praxys Technology Ltd · SOC 2 Type II · ISO 27001 · HIPAA
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy', 'Terms', 'Security', 'Modern slavery'].map(t => (
              <a key={t} href="#" className="mono" style={{ fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.08em' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .foot-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .foot-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
