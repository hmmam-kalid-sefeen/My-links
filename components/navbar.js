import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '30px', padding: '10px 20px' }}>
      <Link href="/">
        <img src="/Logo.png" alt="Logo" style={{ height: '100px' }} />
      </Link>
      <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</Link>
      <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link href="/blog" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Blog</Link>
    </nav>
  );
}

