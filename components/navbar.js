import Link from 'next/link';

export default function Navbar() {
  return (
<nav style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  gap: '30px', 
  padding: '10px 20px' // هنا السر: 10px للأعلى والأسفل تجعلها نحيفة
}}>
   {/* محتويات النافبار */}
</nav>
      <Link href="/">
        <img src="/Logo.png" alt="Logo" style={{ height: '100px' }} />
      </Link>
      <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</Link>
      <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link href="/home" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
    </nav>
  );
}



