import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown'; // استيراد المكتبة

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return <main style={{ padding: '20px' }}><h1>المقالة غير موجودة</h1></main>;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  const meta = data.article_metadata || {};
  
  // نقوم بدمج المحتوى وتحويله لنص Markdown
  const content = data.article_structure?.introduction?.narrative || 
                  data.article_structure?.key_sections?.map(s => `## ${s.heading}\n\n${s.content}`).join("\n\n") ||
                  "";

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{meta.title}</h1>
      
      {meta.image && (
        <img src={meta.image} alt={meta.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }} />
      )}
      
      {/* هنا السحر: react-markdown ستحول النص لفقرات وعناوين تلقائياً */}
      <div className="prose"> 
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
    </main>
  );
}
