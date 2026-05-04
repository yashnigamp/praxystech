const logos = [
  'Northstar', 'Aperture', 'Vesper', 'Helio', 'Quantum', 'Meridian',
  'Kestrel', 'Atlas Bank', 'Praxis Health', 'Orbital', 'Lumen', 'Constellate',
]

export default function Proof() {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '32px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 40, paddingLeft: 32, paddingRight: 32 }}>
        <div className="mono" style={{
          fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.18em',
          whiteSpace: 'nowrap', textTransform: 'uppercase', flexShrink: 0,
        }}>Trusted by ────</div>
        <div style={{ flex: 1, overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
          <div className="marquee-track">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} style={{
                fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em',
                padding: '0 36px', color: 'rgba(245,242,236,0.55)',
                fontFamily: i % 3 === 0 ? 'Instrument Serif, serif' : 'Inter Tight, sans-serif',
                fontStyle: i % 3 === 0 ? 'italic' : 'normal',
                whiteSpace: 'nowrap',
              }}>{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
