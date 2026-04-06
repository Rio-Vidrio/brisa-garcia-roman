// LOGO SETUP: Place The_Rio_Group_Landscape_2024_White.png in /public
// Then replace the text fallback below with:
// <img src="/The_Rio_Group_Landscape_2024_White.png" alt="The Rio Group" style={{height:'38px'}} />

// LOGO SETUP: Place AZ_Associates_White.png in /public
// Then replace the AZ text fallback below with:
// <img src="/AZ_Associates_White.png" alt="AZ & Associates" style={{height:'30px'}} />

export default function PageHeader() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        background: '#111111',
        borderBottom: '3px solid #C8202A',
        height: '80px',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 100,
      }}
    >
      {/* Left: The Rio Group branding */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {/* Replace with logo img when file is placed in /public */}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '18px',
            color: '#ffffff',
            fontWeight: 700,
            letterSpacing: '0.02em',
            lineHeight: 1.2,
          }}
        >
          THE RIO GROUP
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '9px',
            color: '#C8202A',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            fontWeight: 600,
          }}
        >
          POWERED BY AZ &amp; ASSOCIATES
        </span>
      </div>

      {/* Right: AZ & Associates mark */}
      <div>
        {/* Replace with logo img when file is placed in /public */}
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            color: '#888888',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          AZ &amp; Associates
        </span>
      </div>
    </header>
  )
}
