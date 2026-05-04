import { useEffect, useState } from 'react'
import { Icon } from '../icons'

function Field({ label, id, name, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</label>
      <input id={id} name={name} type={type} placeholder={placeholder} required style={{ marginTop: 8, width: '100%', padding: '14px 16px', border: '1px solid var(--line)', background: 'transparent', borderRadius: 12, fontFamily: 'inherit', fontSize: 15, color: 'var(--ink)' }} />
    </div>
  )
}


export default function QuoteModal({ open, onClose }) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  useEffect(() => {
    if (!open) return
    setStatus('idle')
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(e.target)).toString(),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10,11,15,0.55)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', padding: 20 }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: 560, background: 'var(--paper)', borderRadius: 20, padding: 40, position: 'relative', boxShadow: '0 30px 80px -10px rgba(10,11,15,0.5)', maxHeight: '92vh', overflowY: 'auto' }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, borderRadius: 999, border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon.close size={16} />
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <Icon.arrow size={20} />
            </div>
            <h3 className="serif" style={{ fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em' }}>Brief received.</h3>
            <p style={{ marginTop: 16, fontSize: 15, color: 'var(--muted)', lineHeight: 1.6 }}>
              A partner will reply within one business day.<br />Check your inbox for a confirmation.
            </p>
            <button onClick={onClose} className="btn-primary" style={{ justifyContent: 'center', padding: '14px 28px', marginTop: 32 }}>
              Close <Icon.close size={14} />
            </button>
          </div>
        ) : (
          <>
            <div className="eyebrow" style={{ color: 'var(--muted)' }}>(✱) Engagement intake</div>
            <h3 className="serif" style={{ fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em', marginTop: 14 }}>
              Scope a <span className="serif-i">project</span>.
            </h3>
            <p style={{ marginTop: 14, fontSize: 15, color: 'var(--muted)', lineHeight: 1.55 }}>
              A partner replies within one business day. No SDR funnel.
            </p>

            <form
              name="engagement"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              style={{ marginTop: 28, display: 'grid', gap: 18 }}
            >
              <input type="hidden" name="form-name" value="engagement" />
              <input name="bot-field" type="hidden" />
              <Field label="Full name" id="qm-n" name="name" placeholder="Jane Doe" />
              <Field label="Work email" id="qm-e" name="email" type="email" placeholder="jane@company.com" />
              <Field label="Company" id="qm-c" name="company" placeholder="Acme Capital" />
              <div>
                <label htmlFor="qm-m" className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>What are you trying to ship?</label>
                <textarea id="qm-m" name="message" required placeholder="A few lines is enough — we'll come back with smart questions." style={{ marginTop: 8, width: '100%', minHeight: 120, padding: 14, border: '1px solid var(--line)', background: 'transparent', borderRadius: 12, fontFamily: 'inherit', fontSize: 15, resize: 'vertical', color: 'var(--ink)' }} />
              </div>
              {status === 'error' && (
                <p className="mono" style={{ fontSize: 12, color: '#ef4444' }}>Something went wrong — please try again or email us directly.</p>
              )}
              <button type="submit" disabled={status === 'submitting'} className="btn-primary" style={{ justifyContent: 'center', padding: '16px 24px', marginTop: 4, opacity: status === 'submitting' ? 0.6 : 1 }}>
                {status === 'submitting' ? 'Sending…' : <>Send engagement brief <Icon.arrow size={14} /></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
