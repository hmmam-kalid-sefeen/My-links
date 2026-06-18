import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '25px', 
      padding: '20px', 
      color: 'white' 
    }}>
      <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>9smart</Link>
      <Link href="/features" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Features</Link>
      <Link href="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link href="/blog" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Blog</Link>
    </nav>
  );
}
