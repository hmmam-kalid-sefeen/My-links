import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  padding: '10px 20px',
  position: 'fixed',    // هذا السطر هو المسؤول عن تثبيت القائمة
  top: '0',             // وضع القائمة في أعلى الصفحة
  left: '0',            // محاذاة من اليسار
  width: '100%',        // جعل القائمة بعرض كامل الشاشة
  backgroundColor: '#ffffff', // يفضل إضافة لون خلفية للقائمة حتى لا يظهر النص خلفها
  zIndex: '1000'        // لضمان ظهور القائمة دائماً فوق باقي عناصر الصفحة
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
