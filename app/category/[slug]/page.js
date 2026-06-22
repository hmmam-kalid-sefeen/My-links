import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function CategoryPage({ params }) {
  // استخدام await لأن params في Next.js 15+ تكون Promise
  const { slug } = await params;
  
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  // قراءة الملفات داخل الدالة مباشرة لضمان أن المتغيرات في النطاق الصحيح
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // استخراج البيانات بمرونة (سواء من article_metadata أو المستوى الأول)
    const meta = data.article_metadata || data;
    
    return { 
      title: meta.title || "عنوان المقالة",
      category: meta.category || "غير مصنف",
      image: meta.image || "/default-image.jpg",
      slug: meta.slug || filename.replace('.json', ''),
      filename 
    };
  }).filter(post => {
    // تنظيف النصوص للمقارنة (إزالة المسافات، تحويل لأحرف صغيرة)
    const postCategory = post.category?.toLowerCase().replace(/\s+/g, '-');
    return postCategory === slug.toLowerCase();
  });

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textTransform: 'capitalize', marginBottom: '30px' }}>{slug.replace('-', ' ')}</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '12px', backgroundColor: 'white' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} 
                />
                <h3 style={{ fontSize: '1rem', margin: 0 }}>{post.title}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p>لا توجد مقالات في هذا التصنيف حالياً.</p>
        )}
      </div>
    </main>
  );
}
