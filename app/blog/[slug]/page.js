import fs from 'fs';
import path from 'path';
import { marked } from 'marked'; // تأكد من تثبيت هذه المكتبة إذا لم تكن موجودة

async function getPostData(slug) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) return <div>المقال غير موجود</div>;

  // تحويل محتوى الـ Markdown إلى HTML حقيقي
  const htmlContent = marked(post.content || "");

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{post.title}</h1>
      
      {/* عرض المحتوى المحول */}
      <div 
        className="prose" // هذا كلاس جاهز في tailwind ينسق المقالات تلقائياً
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </article>
  );
}
