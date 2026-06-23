import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>المقالة غير موجودة</h1>;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const meta = data.article_metadata || data;
  const content = data.description || data.content || "المحتوى قيد التحديث.";

  return (
    <article style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px', 
      fontFamily: 'sans-serif', 
      lineHeight: '1.6', 
      color: '#333' 
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{meta.title}</h1>
      
      {meta.image && (
        <img 
          src={meta.image} 
          alt={meta.title} 
          style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} 
        />
      )}
      
      <div style={{ fontSize: '1.2rem', whiteSpace: 'pre-line' }}>
        {content}
      </div>
    </article>
  );
}
