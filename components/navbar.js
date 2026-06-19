import Link from 'next/link';

export default function Navbar() {
  return (
    
    <nav style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  padding: '10px 20px',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  backgroundColor: '#ffffff', // هنا اللون الأبيض
  zIndex: '1000',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)' // إضافة ظل بسيط ليظهر الشريط
}}>

    
      <Link href="/">
        <img src="/Logo.png" alt="Logo" style={{ height: '90px', cursor: 'pointer' }} />
      </Link>
      
      <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>
        Contact Us
      </Link>
      
      <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>
        About
      </Link>
      
      <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>
        Home
      </Link>
    </nav>
  );
}
