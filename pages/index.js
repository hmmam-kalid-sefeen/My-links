import Link from 'next/link';

export default function Home({ posts }) {
  // تعريف المتغيرات هنا (خارج الـ return)
  const categories = ['Tech Gadgets', 'Software Tools', 'Digital Marketing', 'Web Development'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Welcome to 9smart</h1>
      
      {/* عرض التصنيفات */}
      <div style={{ display: 'grid', gap: '10px' }}>
        {categories.map(cat => (
          <div key={cat} style={{ padding: '10px', border: '1px solid #ccc' }}>
            <h3>{cat}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

// دالة جلب البيانات (تترك كما هي)
export async function getStaticProps() {
  return { props: { posts: [] } };
}
