import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 30px', 
      background: 'linear-gradient(135deg, #0f172a, #1e3a8a)', 
      color: '#ffffff',
      width: '100%',
      height: '70px',
      boxSizing: 'border-box'
    }}>
      
      {/* اللوجو */}
      <Link href="/">
        <img 
          src="/Logo.png" 
          alt="Logo" 
          style={{ height: '55px', width: 'auto', display: 'block' }} 
        />
      </Link>

      {/* الروابط - التصحيح هنا */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
        <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>About</Link>
        <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}
