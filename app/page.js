import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function HomePage() {
  // 1. جلب البيانات من مجلد posts
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const latestPosts = filenames.map(filename => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
    return JSON.parse(fileContents);
  }).slice(0, 5); // عرض آخر 5 مقالات فقط

  return (
    <main style={{ padding: '20px' }}>
      <h1>Latest Articles</h1>
      
      {/* 2. عرض البيانات باستخدام مصفوفة latestPosts التي عرفناها فوق */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        {latestPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px', 
              padding: '10px', 
              border: '1px solid #e5e7eb', 
              borderRadius: '12px' 
            }}>
              <img 
                src={post.image} 
                alt={post.title} 
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} 
              />
              <h3 style={{ fontSize: '1rem', margin: 0 }}>{post.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
