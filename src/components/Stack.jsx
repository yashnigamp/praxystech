const groups = [
  { label: 'Languages', items: ['TypeScript', 'Python', 'Go', 'Rust', 'Swift', 'Kotlin', 'Java'] },
  { label: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Cloudflare', 'Fly.io', 'Vercel'] },
  { label: 'Data', items: ['Postgres', 'ClickHouse', 'Kafka', 'dbt', 'Snowflake', 'DuckDB'] },
  { label: 'AI / ML', items: ['PyTorch', 'OpenAI', 'Anthropic', 'pgvector', 'LangGraph', 'Triton'] },
  { label: 'Infra', items: ['Kubernetes', 'Terraform', 'Pulumi', 'Nix', 'Istio', 'Temporal'] },
  { label: 'Security', items: ['SOC 2', 'HIPAA', 'PCI-DSS', 'OPA', 'Vault', 'Zero-Trust'] },
]

export default function Stack() {
  return (
    <section style={{ padding: '140px 0', background: 'var(--ink)', color: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      <div className="grain" style={{ opacity: 0.18 }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }} className="stack-grid">
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>(06) — Tech stack</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 4.6vw, 72px)', lineHeight: 1, letterSpacing: '-0.025em', marginTop: 24 }}>
              Boring tools.<br /><span className="serif-i">Sharp execution.</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.6, color: 'var(--muted-2)', maxWidth: 380 }}>
              We pick stacks the on-call engineer at 3am will thank us for. Mature, observable, and boring — until the moment it isn't.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'var(--line-dark)', border: '1px solid var(--line-dark)' }} className="stack-cards">
            {groups.map(g => (
              <div key={g.label} style={{ background: 'var(--ink)', padding: 28 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{g.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
                  {g.items.map(t => (
                    <span key={t}
                      style={{ fontSize: 14, padding: '8px 14px', borderRadius: 999, border: '1px solid var(--line-dark)', color: 'var(--paper)', transition: 'background .2s, color .2s', cursor: 'default' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--ink)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--paper)' }}
                    >{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) { .stack-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .stack-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
