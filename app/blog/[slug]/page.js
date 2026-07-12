import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  
  // قراءة الملف (مع حماية ضد الأخطاء)
  let data;
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return <div>المقالة غير موجودة أو معطوبة</div>;
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{data.title}</h1>
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
