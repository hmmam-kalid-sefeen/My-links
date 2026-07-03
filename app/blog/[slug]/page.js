import fs from 'fs';
import path from 'path';

// هذه الدالة لجلب البيانات
async function getPostData(slug) {
  // نحدد المسار بدقة داخل مجلد الـ posts
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  
  // نتحقق من وجود الملف أولاً لتجنب الانهيار
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function PostPage({ params }) {
  // انتظار الـ params لأنها Promise في Next.js 15+
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return <div>المقال غير موجود</div>;
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{post.title}</h1>

      {post.toc && post.toc.length > 0 && (
        <nav style={{ background: '#f9fafb', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', marginBottom: '20px' }}>
          <h3 style={{ marginTop: '0' }}>Table of Contents</h3>
          <ul style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
            {post.toc.map((item) => (
              <li key={item.id} style={{ marginBottom: '8px' }}>
                <a href={`#${item.id}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
