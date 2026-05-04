import { useState, useEffect } from 'react'
import { Icon } from '../icons'

function DashboardMock() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTick(v => v + 1), 1800)
    return () => clearInterval(t)
  }, [])

  const bars = [42, 58, 35, 71, 52, 68, 84, 76, 91, 82, 95, 88]
  const liveValue = 2840 + ((tick * 17) % 220)

  return (
    <div style={{
      borderRadius: 18, background: 'var(--ink)', color: 'var(--paper)',
      padding: 18, boxShadow: '0 30px 80px -20px rgba(10,11,15,0.55), 0 8px 30px -6px rgba(10,11,15,0.35)',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: 999, background: '#3a3d46' }} />)}
        </div>
        <div className="mono" style={{ fontSize: 10, color: 'var(--muted-2)', letterSpacing: '0.14em' }}>praxys.cloud / OBSERVABILITY</div>
        <div className="mono" style={{ fontSize: 10, color: 'var(--muted-2)' }}>v4.21.0</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 14 }}>
        {[
          { label: 'Throughput', val: liveValue.toLocaleString(), unit: 'rps', delta: '+12.4%' },
          { label: 'p99 Latency', val: '38', unit: 'ms', delta: '−8.2%' },
          { label: 'Error Rate', val: '0.012', unit: '%', delta: '−24%' },
        ].map(s => (
          <div key={s.label} style={{ background: 'var(--ink-2)', borderRadius: 10, padding: 12, border: '1px solid rgba(245,242,236,0.06)' }}>
            <div className="mono" style={{ fontSize: 9, color: 'var(--muted-2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.label}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
              <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{s.val}</span>
              <span className="mono" style={{ fontSize: 10, color: 'var(--muted-2)' }}>{s.unit}</span>
            </div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', marginTop: 4 }}>{s.delta}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--ink-2)', borderRadius: 10, padding: 14, border: '1px solid rgba(245,242,236,0.06)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Service mesh — last 24h</div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--muted-2)', marginTop: 2 }}>14 nodes · us-east-1 · auto-scaling</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['1H', '24H', '7D'].map((p, i) => (
              <span key={p} className="mono" style={{
                fontSize: 10, padding: '4px 8px', borderRadius: 6, fontWeight: 600,
                background: i === 1 ? 'var(--accent)' : 'transparent',
                color: i === 1 ? 'var(--ink)' : 'var(--muted-2)',
                border: i === 1 ? 'none' : '1px solid rgba(245,242,236,0.1)',
              }}>{p}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 90 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, position: 'relative' }}>
              <div className="bar" style={{
                position: 'absolute', inset: 0, borderRadius: 3,
                background: i === bars.length - 2 ? 'var(--accent)' : i === bars.length - 1 ? 'var(--accent-2)' : '#2a2d36',
                animationDelay: `${i * 0.06}s`,
              }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: 12, background: 'var(--ink-2)', borderRadius: 10, padding: 12,
        border: '1px solid rgba(245,242,236,0.06)', display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)' }} className="pulse-soft" />
        <span className="mono" style={{ fontSize: 10, color: 'var(--muted-2)', letterSpacing: '0.06em' }}>
          [{new Date().toISOString().slice(11, 19)}] DEPLOY · payments-api · canary 25% → 100% · OK
        </span>
      </div>
    </div>
  )
}

export default function Hero({ onQuote }) {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY * 0.18)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" style={{ position: 'relative', paddingTop: 160, paddingBottom: 120, overflow: 'hidden' }}>
      <div className="grain" />
      <div style={{
        position: 'absolute', top: 100, right: -240, width: 720, height: 720,
        borderRadius: 999, border: '1px solid var(--line)', pointerEvents: 'none',
        transform: `translateY(${-scrollY * 0.3}px)`,
      }} />
      <div style={{
        position: 'absolute', top: 220, right: -120, width: 480, height: 480,
        borderRadius: 999, border: '1px solid var(--line)', pointerEvents: 'none',
        transform: `translateY(${-scrollY * 0.5}px)`,
      }} />
      <div style={{
        position: 'absolute', top: 240, left: '6%', width: 110, height: 110,
        borderRadius: 999, background: 'var(--accent)', filter: 'blur(0.5px)',
        transform: `translateY(${scrollY * 0.6}px) rotate(${scrollY * 0.3}deg)`, zIndex: 1,
      }} className="no-select" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
          <span className="eyebrow" style={{ color: 'var(--ink)' }}>(01) Premium engineering studio</span>
          <span style={{ width: 60, height: 1, background: 'var(--ink)' }} />
          <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>Est. 2009 · 14 years</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(56px, 9vw, 168px)', fontWeight: 400,
          lineHeight: 0.92, letterSpacing: '-0.04em',
          marginBottom: 48, fontFamily: 'Inter Tight, sans-serif',
        }}>
          We engineer the<br />
          <span className="serif-i" style={{ fontWeight: 400, letterSpacing: '-0.03em' }}>quiet</span> infrastructure<br />
          behind ambitious<br />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 24 }}>
            companies
            <span style={{
              display: 'inline-block', width: 'clamp(80px, 12vw, 200px)', height: 'clamp(60px, 8vw, 120px)',
              background: 'var(--ink)', borderRadius: 'clamp(40px, 6vw, 100px)',
              verticalAlign: 'middle', position: 'relative', overflow: 'hidden',
            }}>
              <span style={{ position: 'absolute', inset: 8, borderRadius: 999, background: 'var(--accent)' }} className="pulse-soft" />
            </span>
            <span className="serif-i">.</span>
          </span>
        </h1>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'end',
          paddingBottom: 80, borderBottom: '1px solid var(--line)',
        }} className="hero-grid">
          <div>
            <p style={{ fontSize: 'clamp(18px, 1.4vw, 22px)', lineHeight: 1.45, maxWidth: 580, fontWeight: 400 }}>
              <span style={{ color: 'var(--muted)' }}>Praxys is a senior-only software studio for</span> finance, healthcare, and logistics teams{' '}
              <span style={{ color: 'var(--muted)' }}>who can't afford handoffs, drift, or downtime. We design, ship, and operate the systems your business runs on.</span>
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={onQuote}>
                Scope a project <Icon.arrow size={14} />
              </button>
              <a className="btn-ghost" href="#work">
                See selected work <Icon.arrowUR size={14} />
              </a>
            </div>
          </div>
          <DashboardMock />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', paddingTop: 40 }} className="kpi-strip">
          {[
            { v: '14yr', l: 'Avg engineer tenure' },
            { v: '$8.2B', l: 'Transactions secured' },
            { v: '99.992%', l: 'Aggregate uptime' },
            { v: '38', l: 'Active clients (NDA)' },
          ].map((k, i) => (
            <div key={k.l} style={{ padding: '0 32px', borderLeft: i === 0 ? 'none' : '1px solid var(--line)' }}>
              <div style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 500, letterSpacing: '-0.025em' }}>{k.v}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{k.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .kpi-strip { grid-template-columns: repeat(2, 1fr) !important; row-gap: 32px !important; }
          .kpi-strip > div:nth-child(3) { border-left: none !important; }
        }
        @media (max-width: 600px) {
          .kpi-strip { grid-template-columns: 1fr !important; }
          .kpi-strip > div { border-left: none !important; padding-left: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  )
}
