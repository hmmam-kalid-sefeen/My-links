import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return <main style={{ padding: '20px' }}><h1>المقالة غير موجودة</h1></main>;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  // دمج المحتوى ليكون جاهزاً للتحويل (Markdown)
  const content = data.description || 
                  data.content || 
                  data.article_structure?.introduction?.narrative || 
                  "لا يوجد محتوى.";

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>{data.article_metadata?.title || "عنوان المقال"}</h1>
      
      {data.article_metadata?.image && (
        <img 
          src={data.article_metadata.image} 
          alt="صورة المقال" 
          style={{ width: '100%', borderRadius: '15px', marginBottom: '30px' }} 
        />
      )}
      
      {/* هنا يتم تحويل الرموز مثل ### إلى عناوين حقيقية تلقائياً */}
      <div className="markdown-content">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
    </main>
  );
}
