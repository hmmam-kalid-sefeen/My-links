export default function Hero() {
  return (
    <section style={{ 
      padding: '60px 20px',
      background: '#f8f9fa',
      display: 'flex',
      justifyContent: 'center', // توسيط المحتوى
    }}>
      {/* حاوية داخلية تحدد العرض */}
      <div style={{ 
        maxWidth: '1000px', // هذا هو سر عرض سطح المكتب
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        
        {/* النص */}
        <h1 style={{ 
          flex: '1', minWidth: '300px', fontSize: '2.5rem', 
          color: '#1e3a8a', fontWeight: '800', lineHeight: '1.2'
        }}>
          DISCOVER THE BEST TECH TOOLS & SOFTWARE
        </h1>

        {/* الصورة الدائرية */}
        <div style={{ 
          flex: '0 0 300px', // حجم ثابت للصورة لتبدو احترافية
          display: 'flex', 
          justifyContent: 'center'
        }}>
          <div style={{ 
            width: '250px', height: '250px', 
            borderRadius: '50%', 
            border: '5px solid #a3bffa',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="/your-image.png" 
              alt="Tech"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
