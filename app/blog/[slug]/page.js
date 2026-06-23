import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  
  // 1. تحديد مسار الملف
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return <main style={{ padding: '20px' }}><h1>المقالة غير موجودة</h1></main>;
  }

  // 2. قراءة وتحليل البيانات
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  // 3. طريقة استخراج النص الأكثر مرونة (حاولنا البحث في عدة أماكن داخل ملف الـ JSON)
  const meta = data.article_metadata || {};
  
  // حاول استخراج المحتوى من عدة احتمالات لهيكل ملف الـ JSON الخاص بك
  const content = data.description || 
                  data.content || 
                  data.article_structure?.introduction?.narrative || 
                  "نعتذر، لم نجد نصاً داخل ملف الـ JSON. يرجى التأكد من هيكلة الملف.";

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{meta.title || "عنوان المقال"}</h1>
      
      {meta.image && (
        <img src={meta.image} alt={meta.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }} />
      )}
      
      <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
        {/* نضع النص هنا */}
        {content}
      </div>

      {/* للتصحيح فقط: هذا الجزء سيظهر لك هيكل البيانات المجلوب فعلياً في أسفل الصفحة */}
      <div style={{ marginTop: '50px', padding: '10px', background: '#f0f0f0' }}>
        <h3>بيانات التصحيح (للتحقق):</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
}
