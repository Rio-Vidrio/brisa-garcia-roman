'use client'

// SETUP: Go to behold.so (free), connect @brisasellsaz, paste Widget ID here:
const BEHOLD_WIDGET_ID: string | null = null

export default function InstagramFeed() {
  return (
    <section
      style={{
        background: '#F9F8F6',
        padding: '80px 2rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <span className="section-label" style={{ marginBottom: '12px' }}>
            Follow Along
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#111111',
              lineHeight: 1.2,
              marginBottom: '12px',
              marginTop: '8px',
            }}
          >
            Latest from @brisasellsaz
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#888888',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Stay up to date with listings, market tips, and behind-the-scenes looks at life in the Phoenix Valley.
          </p>
        </div>

        {/* Feed or placeholder */}
        {BEHOLD_WIDGET_ID ? (
          <div>
            {/* @ts-expect-error — behold-widget is a custom element */}
            <behold-widget feed-id={BEHOLD_WIDGET_ID} />
            <div
              dangerouslySetInnerHTML={{
                __html: `<script src="https://w.behold.so/widget.js" type="module"></script>`,
              }}
            />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            {/* Placeholder card */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #E8E8E8',
                padding: '56px 40px',
                maxWidth: '480px',
                width: '100%',
                textAlign: 'center',
              }}
            >
              {/* Instagram gradient icon */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#111111',
                  marginBottom: '12px',
                }}
              >
                @brisasellsaz
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  color: '#888888',
                  lineHeight: 1.65,
                  marginBottom: '28px',
                }}
              >
                Follow Brisa on Instagram for real estate tips, Phoenix Valley market updates, and new listings.
              </p>

              <a
                href="https://www.instagram.com/brisasellsaz/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#C8202A',
                  color: '#ffffff',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  borderRadius: '6px',
                  padding: '14px 32px',
                  textDecoration: 'none',
                  transition: 'background 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#a01820')}
                onMouseLeave={e => (e.currentTarget.style.background = '#C8202A')}
              >
                Follow on Instagram
              </a>
            </div>

            {/* Developer note */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                color: '#BBBBBB',
                textAlign: 'center',
                maxWidth: '400px',
              }}
            >
              Developer note: To show real Instagram posts, go to{' '}
              <strong>behold.so</strong>, connect @brisasellsaz, copy the Widget ID,
              and set <code>BEHOLD_WIDGET_ID</code> at the top of this file.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
