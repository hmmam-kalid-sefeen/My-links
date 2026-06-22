import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  // استخدام await لأن params في Next.js تكون Promise
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  // 1. التحقق من وجود الملف
  if (!fs.existsSync(filePath)) {
    return (
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>المقالة غير موجودة</h1>
        <p>عذراً، الرابط الذي تحاول الوصول إليه لا يحتوي على ملف JSON مطابق.</p>
      </main>
    );
  }

  // 2. قراءة وتحليل البيانات
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  // الاستخراج الذكي: إذا وجدت article_metadata استخدمها، وإلا استخدم البيانات مباشرة
  const meta = data.article_metadata || data;

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto', lineHeight: '1.8' }}>
      {/* العنوان */}
      <h1 style={{ marginBottom: '20px' }}>{meta.title || "عنوان المقالة"}</h1>
      
      {/* الصورة */}
      <img 
        src={meta.image || "/default-image.jpg"} 
        alt={meta.title} 
        style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }} 
      />
      
      {/* المحتوى */}
      <div style={{ fontSize: '1.1rem' }}>
        {/* هنا سيظهر الوصف إذا كان موجوداً، يمكنك توسيع هذا الجزء لاحقاً */}
        <p>{meta.description || "هذا المحتوى يتم تحديثه قريباً."}</p>
      </div>
    </main>
  );
}
