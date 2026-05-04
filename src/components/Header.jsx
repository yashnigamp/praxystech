import { useState, useEffect } from 'react'
import { Icon } from '../icons'

export default function Header({ onQuote }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Industries', href: '#industries' },
    { label: 'Insights', href: '#faq' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60,
      transition: 'all .5s cubic-bezier(0.16,1,0.3,1)',
      padding: scrolled ? '14px 0' : '24px 0',
      background: scrolled ? 'rgba(245,242,236,0.78)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-soft)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, background: 'var(--ink)', borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <span className="serif-i" style={{ color: 'var(--accent)', fontSize: 26, lineHeight: 1, marginTop: -2 }}>p</span>
            <span style={{ position: 'absolute', top: 4, right: 4, width: 4, height: 4, borderRadius: 999, background: 'var(--accent)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em' }}>Praxys</span>
            <span className="mono" style={{ fontSize: 9, color: 'var(--muted)', marginTop: 2, letterSpacing: '0.14em' }}>TECHNOLOGY</span>
          </div>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="hide-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: 14, fontWeight: 500, padding: '8px 14px', borderRadius: 999,
              color: 'var(--ink)', transition: 'background .2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,11,15,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >{l.label}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="mono hide-mobile" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--muted)',
            padding: '8px 12px', border: '1px solid var(--line)', borderRadius: 999,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#22c55e' }} className="pulse-soft" />
            ACCEPTING Q3 ENGAGEMENTS
          </div>
          <button className="btn-primary" style={{ padding: '12px 20px', fontSize: 14 }} onClick={onQuote}>
            Scope a project <Icon.arrow size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) { .hide-mobile { display: none !important; } }
      `}</style>
    </header>
  )
}
