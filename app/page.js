import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  // الحصول على الـ slug من الرابط
  const { slug } = await params;
  
  // تحديد المسار الصحيح
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.json`);

  // فحص وجود الملف قبل محاولة قراءته
  if (!fs.existsSync(filePath)) {
    return (
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>المقالة غير موجودة</h1>
        <p>نعتذر، لم نتمكن من العثور على الملف في المسار: {filePath}</p>
      </main>
    );
  }

  // قراءة الملف
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const meta = data.article_metadata || data;

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{meta.title || "عنوان المقال"}</h1>
      {/* عرض الصورة فقط إذا كانت موجودة، وإلا لا تعرض شيئاً لتجنب المربع الفارغ */}
      {meta.image && (
        <img src={meta.image} alt={meta.title} style={{ width: '100%', borderRadius: '12px' }} />
      )}
      <div style={{ marginTop: '20px' }}>
        <p>{meta.description || "محتوى المقال قيد التحديث."}</p>
      </div>
    </main>
  );
}
