'use client'

import { useState, CSSProperties } from 'react'

// Web3Forms — submissions go directly to brisasellsaz@gmail.com
const WEB3FORMS_KEY = 'd26110d1-9c59-40fe-9369-d4e7705f07ea'

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  creditScore: string
  residencyStatus: string
  yearlySalary: string
  monthlyDebts: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
  creditScore?: string
  residencyStatus?: string
  yearlySalary?: string
  monthlyDebts?: string
  message?: string
}

const inputStyle: CSSProperties = {
  height: '50px',
  borderRadius: '10px',
  border: '1.5px solid #DDDDDD',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '15px',
  color: '#111111',
  background: '#ffffff',
  width: '100%',
  padding: '0 14px',
  outline: 'none',
  transition: 'border-color 0.18s, box-shadow 0.18s',
  appearance: 'none' as const,
  boxSizing: 'border-box' as const,
}

const errorInputStyle: CSSProperties = {
  ...inputStyle,
  border: '1.5px solid #C8202A',
}

const labelStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: '#555555',
  fontWeight: 600,
  display: 'block',
  marginBottom: '6px',
}

const errorMsgStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '12px',
  color: '#C8202A',
  marginTop: '4px',
  display: 'block',
}

const selectChevron = (
  <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#888' }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </div>
)

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    creditScore: '',
    residencyStatus: '',
    yearlySalary: '',
    monthlyDebts: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required.'
    if (!form.lastName.trim()) e.lastName = 'Last name is required.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.email.trim()) {
      e.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email.'
    }
    if (!form.creditScore) e.creditScore = 'Please select a credit score range.'
    if (!form.residencyStatus) e.residencyStatus = 'Please select a residency status.'
    if (!form.yearlySalary.trim()) e.yearlySalary = 'Yearly salary estimate is required.'
    if (!form.monthlyDebts.trim()) e.monthlyDebts = 'Monthly debts estimate is required.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSending(true)
    setSubmitError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          credit_score: form.creditScore,
          residency_status: form.residencyStatus,
          yearly_salary: form.yearlySalary,
          monthly_debts: form.monthlyDebts,
          message: form.message,
          subject: `Consultation Form from ${form.firstName} ${form.lastName}`,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error('Web3Forms error')
      setSent(true)
    } catch {
      setSubmitError('Something went wrong. Please try again or email directly.')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <section
        id="contact"
        style={{
          background: '#ffffff',
          padding: '90px 2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div
            style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'rgba(200,32,42,0.1)', border: '2px solid rgba(200,32,42,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8202A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#111111', marginBottom: '12px' }}>
            Message Received!
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', color: '#888888', marginBottom: '28px', lineHeight: 1.6 }}>
            Thanks {form.firstName}! Brisa will be in touch shortly.
          </p>
          <a
            href="https://www.instagram.com/brisasellsaz/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#C8202A', textDecoration: 'none', letterSpacing: '0.04em' }}
          >
            Follow @brisasellsaz →
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" style={{ background: '#ffffff', padding: '90px 2rem' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}
      >
        {/* Left column — info panel */}
        <div>
          <span className="section-label" style={{ marginBottom: '14px' }}>Get In Touch</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: '#111111', lineHeight: 1.15, marginBottom: '20px', marginTop: '8px' }}>
            Let&apos;s Talk Real Estate.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: '#777777', lineHeight: 1.75, marginBottom: '32px' }}>
            Ready to buy or just explore your options? Fill out the form and Brisa will respond within 24 hours to answer your questions and help you take the next step.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            <ContactDetail
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" /></svg>}
              label="brisasellsaz@gmail.com"
              href="mailto:brisasellsaz@gmail.com"
            />
            <ContactDetail
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>}
              label="@brisasellsaz"
              href="https://www.instagram.com/brisasellsaz/"
            />
          </div>
          <div style={{ width: '48px', height: '3px', background: '#C8202A', borderRadius: '2px' }} />
        </div>

        {/* Right column — form card */}
        <div style={{ background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 32px rgba(0,0,0,0.09)', border: '1px solid #F0F0F0', padding: 'clamp(24px, 5vw, 48px)' }}>
          <form onSubmit={handleSubmit} noValidate>

            {/* Name row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label htmlFor="firstName" style={labelStyle}>First Name</label>
                <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handleChange} placeholder="Jane" style={errors.firstName ? errorInputStyle : inputStyle} required />
                {errors.firstName && <span style={errorMsgStyle}>{errors.firstName}</span>}
              </div>
              <div>
                <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange} placeholder="Smith" style={errors.lastName ? errorInputStyle : inputStyle} required />
                {errors.lastName && <span style={errorMsgStyle}>{errors.lastName}</span>}
              </div>
            </div>

            {/* Phone + Email row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(480) 555-0123" style={errors.phone ? errorInputStyle : inputStyle} required />
                {errors.phone && <span style={errorMsgStyle}>{errors.phone}</span>}
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email Address</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" style={errors.email ? errorInputStyle : inputStyle} required />
                {errors.email && <span style={errorMsgStyle}>{errors.email}</span>}
              </div>
            </div>

            {/* Credit Score + Residency row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label htmlFor="creditScore" style={labelStyle}>Credit Score Range</label>
                <div style={{ position: 'relative' }}>
                  <select id="creditScore" name="creditScore" value={form.creditScore} onChange={handleChange} style={{ ...(errors.creditScore ? errorInputStyle : inputStyle), paddingRight: '36px', cursor: 'pointer' }} required>
                    <option value="">Select range...</option>
                    <option value="Under 580">Under 580</option>
                    <option value="580–620">580–620</option>
                    <option value="620–660">620–660</option>
                    <option value="660–700">660–700</option>
                    <option value="700+">700+</option>
                  </select>
                  {selectChevron}
                </div>
                {errors.creditScore && <span style={errorMsgStyle}>{errors.creditScore}</span>}
              </div>
              <div>
                <label htmlFor="residencyStatus" style={labelStyle}>Residency Status</label>
                <div style={{ position: 'relative' }}>
                  <select id="residencyStatus" name="residencyStatus" value={form.residencyStatus} onChange={handleChange} style={{ ...(errors.residencyStatus ? errorInputStyle : inputStyle), paddingRight: '36px', cursor: 'pointer' }} required>
                    <option value="">Select status...</option>
                    <option value="Citizen / Resident">Citizen / Resident</option>
                    <option value="DACA / Permit">DACA / Permit</option>
                    <option value="ITIN">ITIN</option>
                  </select>
                  {selectChevron}
                </div>
                {errors.residencyStatus && <span style={errorMsgStyle}>{errors.residencyStatus}</span>}
              </div>
            </div>

            {/* Salary + Debts row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label htmlFor="yearlySalary" style={labelStyle}>Yearly Salary Estimate</label>
                <input id="yearlySalary" name="yearlySalary" type="text" value={form.yearlySalary} onChange={handleChange} placeholder="e.g. $55,000" style={errors.yearlySalary ? errorInputStyle : inputStyle} required />
                {errors.yearlySalary && <span style={errorMsgStyle}>{errors.yearlySalary}</span>}
              </div>
              <div>
                <label htmlFor="monthlyDebts" style={labelStyle}>Monthly Debts (Cards &amp; Car only)</label>
                <input id="monthlyDebts" name="monthlyDebts" type="text" value={form.monthlyDebts} onChange={handleChange} placeholder="e.g. $450" style={errors.monthlyDebts ? errorInputStyle : inputStyle} required />
                {errors.monthlyDebts && <span style={errorMsgStyle}>{errors.monthlyDebts}</span>}
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message" name="message" value={form.message} onChange={handleChange} rows={4}
                placeholder="Tell me a little about what you're looking for..."
                style={{ ...(errors.message ? { ...inputStyle, border: '1.5px solid #C8202A' } : inputStyle), height: 'auto', padding: '12px 14px', resize: 'vertical' }}
                required
              />
              {errors.message && <span style={errorMsgStyle}>{errors.message}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={sending}
              style={{ width: '100%', height: '54px', background: sending ? '#888888' : '#C8202A', color: '#ffffff', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', borderRadius: '8px', border: 'none', cursor: sending ? 'not-allowed' : 'pointer', transition: 'background 0.18s' }}
              onMouseEnter={e => { if (!sending) e.currentTarget.style.background = '#a01820' }}
              onMouseLeave={e => { if (!sending) e.currentTarget.style.background = '#C8202A' }}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {submitError && (
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#C8202A', marginTop: '16px', textAlign: 'center', lineHeight: 1.5 }}>
                {submitError}{' '}
                <a href="mailto:brisasellsaz@gmail.com" style={{ color: '#C8202A', fontWeight: 600 }}>Email directly →</a>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactDetail({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{ display: 'flex', alignItems: 'center', gap: '12px', color: hovered ? '#C8202A' : '#444444', textDecoration: 'none', transition: 'color 0.18s', fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 500 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ flexShrink: 0 }}>{icon}</span>
      {label}
    </a>
  )
}
