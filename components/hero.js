export default function Hero() {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #1e3a8a, #06b6d4)', 
      color: 'white', 
      padding: '100px 20px', 
      textAlign: 'center',
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Discover the Best Tech Tools & Software</h1>
      <button style={{ padding: '15px 40px', borderRadius: '30px', border: 'none', background: 'white', color: '#06b6d4', fontWeight: 'bold' }}>
        Explore Now
      </button>
    </section>
  );
}
