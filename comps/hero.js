export default function Hero() {
  return (
    <section style={{ 
      position: 'relative',
      padding: '60px 20px',
      background: '#f8f9fa', // خلفية فاتحة
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}>
      {/* الموجة الزرقاء في الأعلى */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '150px',
        background: '#3b82f6',
        clipPath: 'ellipse(100% 100% at 50% 0%)'
      }}></div>

      {/* النص */}
      <h1 style={{ 
        flex: '1', minWidth: '280px', fontSize: '2.5rem', 
        color: '#1e3a8a', fontWeight: '800', zIndex: 1,
        textTransform: 'uppercase', lineHeight: '1.2'
      }}>
        DISCOVER THE BEST TECH TOOLS & SOFTWARE
      </h1>

      {/* الصورة الدائرية */}
      <div style={{ 
        flex: '1', minWidth: '280px', display: 'flex', 
        justifyContent: 'center', zIndex: 1, marginTop: '20px'
      }}>
        <div style={{ 
          width: '250px', height: '250px', 
          borderRadius: '50%', // جعلها دائرية
          border: '5px solid #a3bffa', // إطار خفيف
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <img 
            src="/hero.PNG" // ضع مسار صورتك هنا
            alt="Tech Tool"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
