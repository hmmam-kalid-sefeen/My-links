import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  // هذا السطر هو الحل الجذري للـ undefined
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    return <h1>رابط المقالة غير صحيح</h1>;
  }

  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return (
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>المقالة غير موجودة</h1>
        <p>لم يتم العثور على الملف: {slug}.json</p>
      </main>
    );
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const meta = data.article_metadata || data;

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{meta.title}</h1>
      {/* عرض الصورة فقط إذا كانت موجودة */}
      {meta.image && (
        <img src={meta.image} alt={meta.title} style={{ width: '100%', borderRadius: '12px' }} />
      )}
      <div style={{ marginTop: '20px', fontSize: '1.2rem' }}>
        <p>{meta.description || "محتوى المقالة غير متوفر."}</p>
      </div>
    </main>
  );
}
