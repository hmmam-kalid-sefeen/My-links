import Link from 'next/link';

export default function CategoryCard({ title, image }) {
  // إنشاء الرابط ديناميكياً
  const linkPath = `/category/${title.toLowerCase().replace(' ', '-')}`;
  
  return (
    <Link href={linkPath} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ 
        textAlign: 'center', 
        padding: '15px', 
        border: '1px solid #e5e7eb', 
        borderRadius: '15px', 
        cursor: 'pointer', 
        backgroundColor: 'white' 
      }}>
        {/* تم إضافة objectFit وتعديل التنسيق هنا */}
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '100%', 
            height: '100px', 
            borderRadius: '10px', 
            objectFit: 'cover' // هذا هو السطر الذي يوحد مقياس الصور ويمنع تشوهها
          }} 
        />
        <h3 style={{ marginTop: '15px', marginBottom: '5px' }}>{title}</h3>
      </div>
    </Link>
  );
}
