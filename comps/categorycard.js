import Link from 'next/link';

export default function CategoryCard({ title, image }) {
  const linkPath = `/${title.toLowerCase().replace(' ', '-')}`;
  
  return (
    <Link href={linkPath} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ 
        display: 'flex',            // لجعل الصورة والعنوان بجانب بعض
        alignItems: 'center',       // محاذاة في المنتصف عمودياً
        gap: '15px',                // مسافة بين الصورة والعنوان
        padding: '10px', 
        border: '1px solid #e5e7eb', 
        borderRadius: '15px', 
        cursor: 'pointer', 
        backgroundColor: 'white',
        marginBottom: '10px'        // مسافة بين البطاقات
      }}>
        {/* الصورة المصغرة */}
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '80px',          // تحجيم الصورة لتكون مصغرة
            height: '80px', 
            objectFit: 'cover',     // لضمان عدم تشوه الصورة
            borderRadius: '10px' 
          }} 
        />
        
        {/* العنوان */}
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>
    </Link>
  );
}
