const list = [
  { name: 'Finance & Capital Markets', stat: '$8.2B / day', detail: 'Real-time settlement, treasury, and trading systems for tier-1 institutions.' },
  { name: 'Healthcare & Life Sciences', stat: '412 hospitals', detail: 'HIPAA-bound platforms for patient routing, clinical workflow, and HL7 / FHIR integration.' },
  { name: 'Logistics & Supply Chain', stat: '47 countries', detail: 'Visibility platforms and edge orchestration for global freight and last-mile networks.' },
  { name: 'Insurance', stat: '92% STP', detail: 'Underwriting and claims platforms with applied ML for triage and fraud.' },
  { name: 'Public Sector & Defence', stat: 'IL5 cleared', detail: 'Sovereign cloud, accredited environments, and modernisation behind classified estates.' },
  { name: 'Energy & Industrial', stat: '24 grids', detail: 'SCADA modernisation, OT/IT convergence, and predictive maintenance at scale.' },
]

export default function Industries() {
  return (
    <section id="industries" style={{ padding: '140px 0', background: 'var(--paper-2)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ maxWidth: 900, marginBottom: 72 }}>
          <div className="eyebrow" style={{ color: 'var(--muted)' }}>(05) — Industries</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.5vw, 84px)', lineHeight: 0.98, letterSpacing: '-0.025em', marginTop: 24 }}>
            We work where <span className="serif-i">downtime</span> is measured in <span className="serif-i">basis points</span>, not hours.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--line)' }} className="ind-grid">
          {list.map((it, i) => (
            <div key={it.name}
              style={{ padding: '40px 32px', borderBottom: '1px solid var(--line)', borderRight: i % 3 !== 2 ? '1px solid var(--line)' : 'none', minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--paper-2)', transition: 'background .3s', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--paper-3)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--paper-2)'}
            >
              <div>
                <div className="serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing: '-0.02em' }}>{it.stat}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8 }}>{it.name}</div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-3)', marginTop: 32 }}>{it.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .ind-grid { grid-template-columns: repeat(2, 1fr) !important; } .ind-grid > div { border-right: none !important; } .ind-grid > div:nth-child(odd) { border-right: 1px solid var(--line) !important; } }
        @media (max-width: 600px) { .ind-grid { grid-template-columns: 1fr !important; } .ind-grid > div { border-right: none !important; } }
      `}</style>
    </section>
  )
}
