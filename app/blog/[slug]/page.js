import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';

// دالة لجلب بيانات المقال من ملف الـ JSON
async function getPostData(slug) {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error loading post:", error);
    return null;
  }
}

export default async function BlogPost({ params }) {
  // استخدام await لأن params في Next.js 15+ تكون promise
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div style={{ padding: '40px', textAlign: 'center' }}>Article not found</div>;

  return (
    // تم تعديل الستايل ليكون width: 100% ليملأ الشاشة بالكامل بدون فراغات
    <article style={{ width: '100%', padding: '20px', lineHeight: '1.8' }}>
      <h1>{data.title}</h1>
      
      {data.image && (
        <img 
          src={data.image} 
          alt={data.title} 
          style={{ width: '100%', borderRadius: '15px', marginTop: '20px', marginBottom: '20px' }} 
        />
      )}
      
      {/* ReactMarkdown سيقوم بتحويل الجداول والروابط تلقائياً */}
      <div className="prose-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
