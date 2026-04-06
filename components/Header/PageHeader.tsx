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
      {/* Left: The Rio Group logo */}
      <img
        src="/rio-landscape.png"
        alt="The Rio Group"
        style={{ height: '38px', objectFit: 'contain' }}
      />

      {/* Right: AZ & Associates logo */}
      <img
        src="/az-logo-white.png"
        alt="AZ & Associates"
        style={{ height: '30px', objectFit: 'contain' }}
      />
    </header>
  )
}
