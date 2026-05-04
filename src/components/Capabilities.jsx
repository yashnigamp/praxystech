import { Icon } from '../icons'

const items = [
  { n: '01', title: 'Platform engineering', desc: 'Cloud-native foundations, service meshes, and resilient data planes designed to outlive their teams.', tags: ['Kubernetes', 'Terraform', 'Service mesh', 'Multi-region'] },
  { n: '02', title: 'Applied AI & data', desc: 'Production ML pipelines, retrieval systems, and analytics platforms — built for accuracy, not demos.', tags: ['LLM ops', 'Vector search', 'Streaming ETL', 'Observability'] },
  { n: '03', title: 'Product engineering', desc: 'Bespoke web and mobile applications crafted by senior engineers who own the brief end-to-end.', tags: ['React / Next', 'Swift', 'Kotlin', 'Design systems'] },
  { n: '04', title: 'Security & compliance', desc: 'Zero-trust architectures, SOC 2, HIPAA, and PCI engagements led by accredited senior practitioners.', tags: ['SOC 2', 'HIPAA', 'PCI-DSS', 'Threat modeling'] },
  { n: '05', title: 'Modernisation', desc: 'Migrate legacy estates without freezing the business. Strangler-fig rollouts, zero-downtime cutovers.', tags: ['Replatforming', 'Mainframe exit', 'Monolith → services'] },
  { n: '06', title: 'Staff engineering as a service', desc: 'Embedded staff and principal engineers when you need senior firepower without the hiring cycle.', tags: ['Architecture review', 'Tech due diligence', 'Mentorship'] },
]

export default function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: '160px 0 120px', background: 'var(--paper)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start', marginBottom: 80 }} className="cap-head">
          <div style={{ position: 'sticky', top: 120, alignSelf: 'start' }} className="cap-left">
            <div className="eyebrow" style={{ color: 'var(--muted)' }}>(02) — Capabilities</div>
            <div style={{ marginTop: 24 }}>
              <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 0.98, letterSpacing: '-0.025em' }}>
                Six disciplines.<br />
                <span className="serif-i">One team</span> that ships them together.
              </h2>
              <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 460 }}>
                We don't hand you off to juniors after the kickoff. The engineers who scope your brief are the ones writing your production code six months in.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }} className="cap-grid">
            {items.map(it => (
              <article key={it.n}
                style={{ background: 'var(--paper)', padding: 36, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'background .35s, color .35s', cursor: 'pointer' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--ink)'
                  e.currentTarget.style.color = 'var(--paper)'
                  const arr = e.currentTarget.querySelector('.cap-arr')
                  if (arr) arr.style.background = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--paper)'
                  e.currentTarget.style.color = 'var(--ink)'
                  const arr = e.currentTarget.querySelector('.cap-arr')
                  if (arr) arr.style.background = 'transparent'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span className="mono" style={{ fontSize: 12, opacity: 0.5 }}>{it.n}</span>
                    <span className="cap-arr" style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .25s' }}>
                      <Icon.arrowUR size={14} />
                    </span>
                  </div>
                  <h3 className="serif" style={{ fontSize: 38, marginTop: 60, letterSpacing: '-0.02em', lineHeight: 1 }}>{it.title}</h3>
                  <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.55, opacity: 0.7 }}>{it.desc}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 24 }}>
                  {it.tags.map(t => (
                    <span key={t} className="mono" style={{ fontSize: 10, padding: '5px 10px', borderRadius: 999, border: '1px solid currentColor', opacity: 0.55 }}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .cap-head { grid-template-columns: 1fr !important; gap: 40px !important; } .cap-left { position: relative !important; top: auto !important; } }
        @media (max-width: 720px) { .cap-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
