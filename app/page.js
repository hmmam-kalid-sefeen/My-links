import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return <main style={{ padding: '20px' }}><h1>المقالة غير موجودة</h1></main>;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const meta = data.article_metadata || {};

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto', lineHeight: '1.8' }}>
      {/* 1. عرض العنوان */}
      <h1>{meta.title}</h1>
      
      {/* 2. عرض صورة ثابتة (بما أن ملفك لا يحتوي على رابط صورة) */}
      {/* يمكنك تغيير الرابط لصورة من مجلد public/images/ */}
      <img 
        src="/default-image.jpg" 
        alt={meta.title} 
        style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }} 
      />
      
      {/* 3. عرض المحتوى من الهيكلية المعقدة */}
      <div style={{ fontSize: '1.1rem' }}>
        <h2>المقدمة</h2>
        <p>{data.article_structure?.introduction?.hook}</p>
        
        <h2>أهم الأجهزة المقترحة</h2>
        {data.article_structure?.key_sections?.find(s => s.heading.includes("Top 5"))?.subsections?.map((item, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            <strong>{item.product}:</strong> {item.focus}
          </div>
        ))}
      </div>
    </main>
  );
}
