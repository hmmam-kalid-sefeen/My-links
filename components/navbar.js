import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', padding: '20px' }}>
      
      {/* استبدلنا النص هنا بالصورة */}
      <Link href="/">
        <img 
          src="/Logo.png" 
          alt="9smart Logo" 
          style={{ height: '40px', cursor: 'pointer' }} 
        />
      </Link>

      <Link href="/features" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Features</Link>
      <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link href="/blog" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Blog</Link>
    </nav>
  );
}
