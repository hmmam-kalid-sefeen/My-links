import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown'; // 1. استيراد المكتبة

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) return <h1>رابط المقالة غير صحيح</h1>;

  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return <main><h1>المقالة غير موجودة</h1></main>;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const meta = data.article_metadata || data;

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{meta.title}</h1>
      
      {meta.image && (
        <img src={meta.image} alt={meta.title} style={{ width: '100%', borderRadius: '12px' }} />
      )}
      
      {/* 2. استخدام ReactMarkdown بدلاً من p العادية */}
      <div style={{ marginTop: '20px', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <ReactMarkdown>
          {meta.content || "محتوى المقالة غير متوفر."}
        </ReactMarkdown>
      </div>
    </main>
  );
}
