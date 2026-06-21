import fs from 'fs';
import path from 'path';

export default async function PostPage({ params }) {
  // جلب الـ slug من الرابط
  const { slug } = await params;
  
  // تحديد مسار ملف المقال
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  try {
    // قراءة محتوى الملف
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const post = JSON.parse(fileContents);

    return (
      <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1 style={{ marginBottom: '10px' }}>{post.title}</h1>
        <p style={{ color: '#666' }}>التصنيف: {post.category}</p>
        <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
          {post.content}
        </div>
      </main>
    );
  } catch (error) {
    // في حال عدم العثور على المقال
    return (
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>404 - المقال غير موجود</h1>
        <p>عذراً، الرابط الذي تحاول الوصول إليه لا يحتوي على مقال.</p>
      </main>
    );
  }
}
