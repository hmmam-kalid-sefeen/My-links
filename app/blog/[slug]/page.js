import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';

async function getPostData(slug) {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div>Article not found</div>;

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{data.title}</h1>
      {data.image && <img src={data.image} alt={data.title} style={{ width: '100%', borderRadius: '15px' }} />}
      
      <div className="prose-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
