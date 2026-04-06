'use client'

import { useState } from 'react'

export default function PageFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#111111',
        borderTop: '3px solid #C8202A',
        padding: '56px 2rem 36px',
        textAlign: 'center',
      }}
    >
      {/* Logos side by side */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          marginBottom: '10px',
          flexWrap: 'wrap',
        }}
      >
        <img
          src="/rio-landscape.png"
          alt="The Rio Group"
          style={{ height: '36px', objectFit: 'contain' }}
        />
        <div style={{ width: '1px', height: '28px', background: '#333' }} />
        <img
          src="/az-logo-white.png"
          alt="AZ & Associates"
          style={{ height: '26px', objectFit: 'contain' }}
        />
      </div>

      {/* Contact info */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          marginBottom: '28px',
          marginTop: '24px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="https://www.instagram.com/brisasellsaz/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#888',
            textDecoration: 'none',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            transition: 'color 0.18s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C8202A')}
          onMouseLeave={e => (e.currentTarget.style.color = '#888')}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          @brisasellsaz
        </a>

        <span style={{ color: '#333', fontSize: '12px' }}>·</span>

        <a
          href="mailto:brisasellsaz@gmail.com"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#888',
            textDecoration: 'none',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            transition: 'color 0.18s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C8202A')}
          onMouseLeave={e => (e.currentTarget.style.color = '#888')}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
          brisasellsaz@gmail.com
        </a>
      </div>

      {/* Social icon row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '28px',
        }}
      >
        <SocialIcon href="https://www.instagram.com/brisasellsaz/" label="Follow @brisasellsaz on Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </SocialIcon>
        <SocialIcon href="mailto:brisasellsaz@gmail.com" label="Email Brisa">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
        </SocialIcon>
      </div>

      {/* Divider */}
      <div style={{ width: '40px', height: '1px', background: '#333333', margin: '0 auto 20px' }} />

      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#666666', marginBottom: '8px', letterSpacing: '0.04em' }}>
        Brisa Garcia Roman · Licensed REALTOR® · AZ &amp; Associates
      </p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#444444', letterSpacing: '0.04em' }}>
        &copy; {year} The Rio Group. All Rights Reserved.
      </p>
    </footer>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      style={{
        width: '36px', height: '36px', borderRadius: '50%',
        border: hovered ? '1px solid #C8202A' : '1px solid #333333',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? '#C8202A' : 'rgba(255,255,255,0.5)',
        transition: 'border-color 0.18s, color 0.18s',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}
