function Header({ name }) {
  return (
    <header style={{ padding: '2rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <h1 style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>{name}</h1>
    </header>
  );
}