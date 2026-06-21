import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown'; // تأكد من تثبيت هذه المكتبة

export default async function PostPage({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const post = JSON.parse(fileContents);

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{post.title}</h1>
      
      {/* عرض المحتوى باستخدام ReactMarkdown لتحويل الماركدون إلى HTML */}
      <div className="prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </main>
  );
}
