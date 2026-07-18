export default function Hero() {
  return (
    <section style={{ 
      textAlign: 'center', 
      padding: '60px 20px', 
      background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', 
      color: '#ffffff',
      borderRadius: '20px',
      margin: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
    }}>
      <h1 style={{ 
        margin: '0 0 15px 0', 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        color: '#ffffff' // اللون الأبيض الذي طلبته
      }}>
        Discover the Best Tech Tools & Software
      </h1>
      
      <p style={{ 
        fontSize: '1.1rem', 
        marginBottom: '30px', 
        opacity: '0.9',
        lineHeight: '1.5'
      }}>
        Stay ahead with our curated list of the latest tech tools and software solutions designed to boost your productivity.
      </p>
      
      <button style={{ 
        padding: '12px 35px', 
        background: '#ffffff', 
        color: '#1e3a8a', 
        border: 'none', 
        borderRadius: '30px', 
        fontSize: '1rem', 
        fontWeight: 'bold', 
        cursor: 'pointer',
        transition: 'transform 0.2s'
      }}>
        Explore Now
      </button>
    </section>
  );
}
