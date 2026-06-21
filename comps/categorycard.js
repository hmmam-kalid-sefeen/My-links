import Link from 'next/link';

export default function CategoryCard({ title }) {
  return (
    // ربط الرابط بالمسار الذي تريده، مثلاً /category/top-gadgets
    <Link href={`/category/${title.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ 
        textAlign: 'center',        // هذا يوسّط النص
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '10px',
        cursor: 'pointer'           // يغير شكل الماوس عند النقر
      }}>
        {/* أضف صورتك هنا إذا كانت موجودة */}
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
