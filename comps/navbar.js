import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', // اللوجو في أقصى اليسار والروابط في أقصى اليمين
      alignItems: 'center', 
      padding: '15px 30px', 
      background: 'linear-gradient(135deg, #0f172a, #1e3a8a)', // اللون الكحلي
      color: '#ffffff',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* اللوجو */}
      <Link href="/">
        <img src="/Logo.png" alt="Logo" style={{ height: '40px' }} />
      </Link>

      {/* الروابط */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
        <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</Link>
      </div>
    </nav>
  );
}
