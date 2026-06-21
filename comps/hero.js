// ملف comps/hero.js الجديد بعد التعديل

export default function Hero() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px 20px',  // زيادة الـ padding ليعطي مساحة للعنوان
      color: 'white' // تأكد من أن لون النص أبيض
    }}>
      {/* العنوان فقط */}
      <h1 style={{ margin: '0' }}>
        Discover the Best Tech Tools & Software
      </h1>
    </div>
  );
}
