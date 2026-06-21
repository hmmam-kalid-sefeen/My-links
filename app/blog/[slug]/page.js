import fs from 'fs';
import path from 'path';

export default async function PostPage({ params }) {
  // جلب الـ slug من الرابط
  const { slug } = await params;
  
  // قراءة ملف المقال
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const post = JSON.parse(fileContents);

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{post.title}</h1>
      <div style={{ marginTop: '20px' }}>
        {post.content}
      </div>
    </main>
  );
}
