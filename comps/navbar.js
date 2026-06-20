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
  </div>
</nav>
