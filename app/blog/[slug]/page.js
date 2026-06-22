import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return <main style={{ padding: '20px' }}><h1>المقالة غير موجودة</h1></main>;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const meta = data.article_metadata || data;
  
  // استخراج المحتوى (سواء كان في description أو في الهيكلية)
  const content = meta.description || data.article_structure?.introduction?.narrative || "لا يوجد محتوى.";

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '20px' }}>{meta.title}</h1>
      
      {meta.image && (
        <img src={meta.image} alt={meta.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }} />
      )}
      
      {/* التعديل هنا: استخدام whiteSpace: 'pre-line' سيجعل المتصفح يحترم فواصل الأسطر */}
      <div style={{ 
        fontSize: '1.2rem', 
        lineHeight: '1.8', 
        color: '#333',
        whiteSpace: 'pre-line' 
      }}>
        {content}
      </div>
    </main>
  );
}
