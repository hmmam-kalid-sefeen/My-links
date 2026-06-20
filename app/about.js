import Navbar from '../comps/navbar';
import Footer from '../comps/footer';

export default function About() {
  return (
    <>
      <Navbar />
      
      <main style={{ 
        padding: '80px 20px', 
        maxWidth: '800px', 
        margin: '0 auto', 
        textAlign: 'center',
        lineHeight: '1.8',
        color: '#333'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>About 9smart</h1>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Welcome to <strong>9smart</strong>, your ultimate destination for discovering the best tech tools and software solutions. 
          We believe that the right technology can transform the way you work and live.
        </p>

        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Our mission is to simplify the complex world of software and gadgets by providing honest, 
          in-depth reviews, productivity guides, and expert recommendations tailored for developers, 
          creatives, and tech enthusiasts.
        </p>

        <h2 style={{ marginTop: '40px', fontSize: '1.8rem' }}>Why Choose Us?</h2>
        <ul style={{ listStyle: 'none', padding: '0', marginTop: '20px' }}>
          <li style={{ marginBottom: '10px' }}>✅ Honest and unbiased reviews.</li>
          <li style={{ marginBottom: '10px' }}>✅ Productivity-focused insights.</li>
          <li style={{ marginBottom: '10px' }}>✅ Expertly curated content for 2026.</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
