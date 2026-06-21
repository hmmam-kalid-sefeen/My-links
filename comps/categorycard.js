import Link from 'next/link';

export default function CategoryCard({ title, image }) {
  // نقوم بتوليد رابط آلي (مثال: /top-gadgets)
  const linkPath = `/${title.toLowerCase().replace(' ', '-')}`;

  return (
    <Link href={linkPath} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ 
        textAlign: 'center',        // هذا يوسّط النص والصورة داخل البطاقة
        padding: '15px', 
        border: '1px solid #e5e7eb', 
        borderRadius: '15px',
        cursor: 'pointer',          // يغير شكل الماوس عند المرور لتنبيه الزائر أنها قابلة للنقر
        backgroundColor: 'white'
      }}>
        {/* التأكد من عرض الصورة بشكل صحيح */}
        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
        />
        
        {/* العنوان أصبح في المنتصف تلقائياً */}
        <h3 style={{ marginTop: '15px', marginBottom: '5px' }}>{title}</h3>
      </div>
    </Link>
  );
}
