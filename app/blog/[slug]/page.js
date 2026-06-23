import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  // الحصول على الـ slug من الرابط
  const { slug } = await params;
  
  // 1. تحديد مجلد المقالات بشكل صحيح
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  // 2. البحث عن الملف: إما أن يكون هو نفسه الـ slug، أو نحاول إيجاده في المجلد
  const filePath = path.join(postsDirectory, `${slug}.json`);

  // 3. التحقق من وجود الملف
  if (!fs.existsSync(filePath)) {
    // محاولة تصحيحية: عرض الملفات الموجودة في المجلد لتشخيص المشكلة
    const existingFiles = fs.readdirSync(postsDirectory);
    return (
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>المقالة غير موجودة</h1>
        <p>الرابط الذي تحاول الوصول إليه هو: <strong>{slug}</strong></p>
        <p>لم نجد ملفاً بهذا الاسم في المسار: <code>{filePath}</code></p>
        <p>الملفات الموجودة فعلياً في مجلد posts هي: {existingFiles.join(', ')}</p>
      </main>
    );
  }

  // قراءة وعرض المحتوى
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const meta = data.article_metadata || data;

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{meta.title}</h1>
      {meta.image && (
        <img src={meta.image} alt={meta.title} style={{ width: '100%', borderRadius: '12px' }} />
      )}
      <div style={{ marginTop: '20px' }}>
        <p>{meta.description || "لا يوجد محتوى لعرضه."}</p>
      </div>
    </main>
  );
}
