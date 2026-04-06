'use client'

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        background: '#1A1A1A',
        padding: '100px 2rem 90px',
        textAlign: 'center',
        width: '100%',
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          color: '#C8202A',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontWeight: 600,
          marginBottom: '20px',
        }}
      >
        THE RIO GROUP · AZ &amp; ASSOCIATES
      </p>

      {/* Name */}
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(38px, 6vw, 62px)',
          color: '#ffffff',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '20px',
        }}
      >
        Brisa Garcia Roman
      </h1>

      {/* Title badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(200,32,42,0.12)',
          border: '1px solid rgba(200,32,42,0.3)',
          borderRadius: '4px',
          padding: '6px 16px',
          marginBottom: '32px',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            color: '#C8202A',
            fontWeight: 600,
            letterSpacing: '0.06em',
          }}
        >
          REALTOR®
        </span>
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>|</span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            color: '#888888',
            fontWeight: 500,
            letterSpacing: '0.06em',
          }}
        >
          THE RIO GROUP
        </span>
      </div>

      {/* Bio */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '17px',
          color: '#AAAAAA',
          maxWidth: '500px',
          margin: '0 auto 40px',
          lineHeight: 1.65,
        }}
      >
        Helping buyers and sellers across the Phoenix Valley find their perfect home —
        with honesty, strategy, and real results.
      </p>

      {/* CTA button */}
      <button
        onClick={scrollToContact}
        style={{
          background: '#C8202A',
          color: '#ffffff',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          fontWeight: 600,
          borderRadius: '6px',
          padding: '16px 44px',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '36px',
          transition: 'background 0.18s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#a01820')}
        onMouseLeave={e => (e.currentTarget.style.background = '#C8202A')}
      >
        Get In Touch
      </button>

      {/* Social icons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '14px',
        }}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/brisasellsaz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow @brisasellsaz on Instagram"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.6)',
            transition: 'border-color 0.18s, color 0.18s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#C8202A'
            e.currentTarget.style.color = '#C8202A'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:brisasellsaz@gmail.com"
          aria-label="Email Brisa"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.6)',
            transition: 'border-color 0.18s, color 0.18s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#C8202A'
            e.currentTarget.style.color = '#C8202A'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
        </a>
      </div>
    </section>
  )
}
