import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 30px', 
      background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
      color: '#ffffff'
    }}>
      {/* اللوجو في اليسار */}
      <Link href="/">
        <img src="/Logo.png" alt="Logo" style={{ height: '40px', cursor: 'pointer' }} />
      </Link>

      {/* الروابط في اليمين */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
        <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</Link>
      </div>
    </nav>
  );
}
