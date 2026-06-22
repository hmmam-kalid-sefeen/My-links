import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  // انتظار بارامترات الرابط
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    return <h1>رابط المقالة غير صحيح</h1>;
  }

  // تحديد مسار ملفات المقالات
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.json`);

  // التحقق من وجود الملف
  if (!fs.existsSync(filePath)) {
    return (
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>المقالة غير موجودة</h1>
        <p>لم يتم العثور على الملف: {slug}.json</p>
      </main>
    );
  }

  // قراءة محتوى الملف وتحويله إلى كائن
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  // دمج البيانات (يدعم الهيكل الجديد والقديم)
  const meta = data.article_metadata || data;

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{meta.title}</h1>
      
      {/* عرض الصورة */}
      {meta.image && (
        <img 
          src={meta.image} 
          alt={meta.title} 
          style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }} 
        />
      )}
      
      {/* عرض المحتوى مع الحفاظ على تنسيق الأسطر */}
      <div style={{ 
        marginTop: '20px', 
        fontSize: '1.2rem', 
        lineHeight: '1.6', 
        whiteSpace: 'pre-line' 
      }}>
        <p>{meta.content || "محتوى المقالة غير متوفر."}</p>
      </div>
    </main>
  );
}
