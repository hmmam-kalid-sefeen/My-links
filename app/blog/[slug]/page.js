import fs from 'fs';
import path from 'path';

// 1. هذه الدالة تجلب البيانات (أضفناها هنا لأنها كانت مفقودة)
async function getPostData(slug) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

// 2. هذه الدالة هي الأساسية لعرض الصفحة
export default async function PostPage({ params }) {
  const post = await getPostData(params.slug);

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
                <a href={`#${item.id}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
