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
  height: '70px', // [مهم] تحديد ارتفاع ثابت للترويسة
  boxSizing: 'border-box'
}}>
  
  {/* اللوجو */}
  <Link href="/">
    <img 
      src="/Logo.png" 
      alt="Logo" 
      style={{ 
        height: '55px', // يمكنك تكبير هذا الرقم كما تشاء
        width: 'auto',  // [مهم] للحفاظ على تناسب أبعاد الصورة
        display: 'block' // لمنع وجود مسافات إضافية تحت الصورة
      }} 
    />
  </Link>

  {/* الروابط */}
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
     {/* ... روابطك ... */}
    {/* الروابط في اليمين */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
        <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</Link>
  </div>
         </div> 
</nav>
);
}
