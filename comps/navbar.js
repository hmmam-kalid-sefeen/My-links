<nav style={{ 
  display: 'flex', 
  justifyContent: 'space-between', // سيبعد اللوجو عن الروابط لأقصى حد
  alignItems: 'center', 
  padding: '15px 30px', 
  background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
  width: '100%' // تأكد من إضافة هذه لضمان أن النافبار يأخذ عرض الشاشة بالكامل
}}>
  {/* اللوجو */}
  <Link href="/">
    <img src="/Logo.png" alt="Logo" style={{ height: '40px' }} />
  </Link>
  
  {/* الروابط */}
  <div style={{ display: 'flex', gap: '20px' }}>
    <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
    <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>About</Link>
    <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact Us</Link>
  </div>
</nav>
