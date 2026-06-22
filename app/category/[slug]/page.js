import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  // جلب البيانات ومعالجتها بشكل ذكي لتتوافق مع المقالتين
  const posts = filenames.map(filename => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
    const data = JSON.parse(fileContents);
    
    // استخراج البيانات بمرونة (سواء داخل article_metadata أو مباشرة)
    const meta = data.article_metadata || data;
    
    return { 
      title: meta.title || "عنوان المقالة",
      category: meta.category || "غير مصنف",
      image: meta.image || "/default-image.jpg", // صورة افتراضية في حال غيابها
      slug: meta.slug || filename.replace('.json', ''),
      filename 
    };
  }).filter(post => post.category?.toLowerCase() === slug.toLowerCase().replace('-', ' '));

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '30px', textTransform: 'capitalize' }}>{slug.replace('-', ' ')}</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px', 
                padding: '12px', 
                border: '1px solid #e5e7eb', 
                borderRadius: '12px',
                transition: 'background 0.2s'
              }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} 
                />
                <h2 style={{ fontSize: '1.1rem', margin: 0 }}>{post.title}</h2>
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
