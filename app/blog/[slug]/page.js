import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown'; // استيراد المكتبة

async function getPostData(slug) {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div>Article not found</div>;

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.8' }}>
      <h1>{data.title}</h1>
      {data.image && <img src={data.image} alt={data.title} style={{ width: '100%', borderRadius: '15px' }} />}
      
      {/* استخدام ReactMarkdown لتحويل النص إلى هيكل HTML سليم */}
      <div style={{ marginTop: '20px' }}>
        <ReactMarkdown>
          {data.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
