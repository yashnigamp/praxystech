import { useState } from 'react'
import { Icon } from '../icons'

function WorkCard({ idx, project, hovered, setHovered }) {
  const isHovered = hovered === idx
  return (
    <article
      onMouseEnter={() => setHovered(idx)}
      onMouseLeave={() => setHovered(null)}
      style={{ position: 'relative', borderTop: '1px solid var(--line)', padding: '36px 0', cursor: 'pointer' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '60px 1.4fr 1fr 1fr 60px', gap: 24, alignItems: 'center' }} className="work-row">
        <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>{String(idx + 1).padStart(2, '0')}</div>
        <div>
          <h3 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.02em', transition: 'color .3s', color: isHovered ? 'var(--accent-2)' : 'var(--ink)' }}>
            {project.title}
          </h3>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{project.client}</div>
        </div>
        <div className="hide-on-mobile" style={{ fontSize: 14, color: 'var(--muted)' }}>{project.sector}</div>
        <div className="hide-on-mobile" style={{ fontSize: 14, color: 'var(--muted)' }}>{project.year}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span style={{
            width: 44, height: 44, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: isHovered ? 'var(--accent)' : 'transparent',
            border: `1px solid ${isHovered ? 'var(--accent)' : 'var(--line)'}`,
            transition: 'all .3s', transform: isHovered ? 'rotate(0deg)' : 'rotate(-30deg)',
          }}>
            <Icon.arrowUR size={16} />
          </span>
        </div>
      </div>

      <div style={{
        position: 'absolute', top: '50%', left: '40%', width: 360, aspectRatio: '4/3',
        transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.85})`,
        opacity: isHovered ? 1 : 0, pointerEvents: 'none',
        transition: 'all .35s cubic-bezier(0.16,1,0.3,1)',
        zIndex: 5, borderRadius: 14, overflow: 'hidden',
        boxShadow: '0 30px 80px -20px rgba(10,11,15,0.5)',
        background: project.bg,
      }} className="hide-on-mobile">
        {project.preview}
      </div>

      <style>{`
        @media (max-width: 760px) { .hide-on-mobile { display: none !important; } .work-row { grid-template-columns: 40px 1fr 40px !important; } }
      `}</style>
    </article>
  )
}

const projects = [
  {
    title: 'Real-time treasury for a global neobank', client: 'Atlas Bank · NDA', sector: 'Finance', year: '2025', bg: '#0F1933',
    preview: (
      <div style={{ position: 'absolute', inset: 0, padding: 18, color: '#cfe' }}>
        <div className="mono" style={{ fontSize: 9, opacity: 0.6 }}>BALANCE.usd · live</div>
        <div className="serif" style={{ fontSize: 38, marginTop: 6 }}>$2.84B</div>
        <div style={{ marginTop: 14, height: 60, display: 'flex', alignItems: 'flex-end', gap: 3 }}>
          {[40,55,48,62,58,70,65,78,72,84,88,82,92].map((h,i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i > 9 ? '#D4FF3D' : 'rgba(207,238,238,0.2)', borderRadius: 2 }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Patient-routing platform for 412 hospitals', client: 'Praxis Health Network', sector: 'Healthcare', year: '2024', bg: '#1B2920',
    preview: (
      <div style={{ position: 'absolute', inset: 0, padding: 18, color: '#dfe' }}>
        <div className="mono" style={{ fontSize: 9, opacity: 0.6 }}>NETWORK.live</div>
        <svg viewBox="0 0 300 200" style={{ width: '100%', height: 'calc(100% - 18px)', marginTop: 6 }}>
          {[[40,60],[80,40],[120,90],[170,55],[220,80],[260,40],[60,140],[140,160],[230,150]].map((p,i) => (
            <g key={i}><circle cx={p[0]} cy={p[1]} r="4" fill="#D4FF3D" /><circle cx={p[0]} cy={p[1]} r="14" fill="none" stroke="#D4FF3D" opacity="0.3" /></g>
          ))}
          <path d="M40,60 L80,40 L120,90 L170,55 L220,80 L260,40 M60,140 L120,90 L140,160 L170,55 M230,150 L220,80" stroke="#D4FF3D" strokeWidth="0.7" fill="none" opacity="0.5" />
        </svg>
      </div>
    ),
  },
  {
    title: 'Supply-chain visibility platform, 47-country rollout', client: 'Meridian Logistics', sector: 'Logistics', year: '2024', bg: '#2B1F12',
    preview: (
      <div style={{ position: 'absolute', inset: 0, padding: 18, color: '#fed' }}>
        <div className="mono" style={{ fontSize: 9, opacity: 0.6 }}>SHIPMENTS.in-flight</div>
        <div className="serif" style={{ fontSize: 38, marginTop: 6 }}>14,802</div>
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)', gap: 2 }}>
          {Array.from({length: 80}).map((_,i) => (
            <div key={i} style={{ aspectRatio: '1', background: i % 3 !== 0 ? '#D4FF3D' : 'rgba(254,238,221,0.15)', opacity: 0.3 + (i % 7) * 0.1, borderRadius: 1 }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'AI claims-triage engine, 92% straight-through', client: 'Vesper Insurance', sector: 'Insurance', year: '2023', bg: '#1A1A2E',
    preview: (
      <div style={{ position: 'absolute', inset: 0, padding: 18, color: '#dde' }}>
        <div className="mono" style={{ fontSize: 9, opacity: 0.6 }}>QUEUE.priority</div>
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[92,78,64,51,39,23].map((v,i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="mono" style={{ fontSize: 9, width: 28, opacity: 0.6 }}>#{1042+i}</span>
              <div style={{ flex: 1, height: 6, background: 'rgba(221,221,238,0.15)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: `${v}%`, height: '100%', background: i < 2 ? '#D4FF3D' : 'rgba(221,221,238,0.5)' }} />
              </div>
              <span className="mono" style={{ fontSize: 9, opacity: 0.6 }}>{v}%</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Trading-floor migration, zero downtime', client: 'Northstar Capital', sector: 'Finance', year: '2023', bg: '#23110F',
    preview: (
      <div style={{ position: 'absolute', inset: 0, padding: 18, color: '#fed' }}>
        <div className="mono" style={{ fontSize: 9, opacity: 0.6 }}>LATENCY.p99 (ms)</div>
        <div className="serif" style={{ fontSize: 38, marginTop: 6 }}>0.83</div>
        <svg viewBox="0 0 300 80" style={{ width: '100%', marginTop: 10 }}>
          <path d="M0,60 Q40,40 80,45 T160,30 T240,20 T300,15" stroke="#D4FF3D" strokeWidth="2" fill="none" />
          <path d="M0,60 Q40,40 80,45 T160,30 T240,20 T300,15 L300,80 L0,80 Z" fill="#D4FF3D" opacity="0.15" />
        </svg>
      </div>
    ),
  },
]

export default function Work() {
  const [hovered, setHovered] = useState(null)
  return (
    <section id="work" style={{ padding: '160px 0 140px', background: 'var(--paper)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--muted)' }}>(04) — Selected work</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.5vw, 88px)', lineHeight: 0.98, letterSpacing: '-0.025em', marginTop: 24 }}>
              Recent engagements,<br /><span className="serif-i">redacted where required.</span>
            </h2>
          </div>
          <a href="#" className="btn-ghost">Full portfolio under NDA <Icon.arrowUR size={14} /></a>
        </div>
        <div>
          {projects.map((p, i) => <WorkCard key={p.title} idx={i} project={p} hovered={hovered} setHovered={setHovered} />)}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  )
}
