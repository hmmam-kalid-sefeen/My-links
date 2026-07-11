import fs from 'fs';
import path from 'path';

async function getPostData(slug) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export async function generateMetadata({ params }) {
  const data = await getPostData((await params).slug);
  if (!data) return { title: "Article Not Found" };
  return {
    title: data.title,
    description: data.description?.substring(0, 160), // ضبط الطول ليكون مثالي
    openGraph: { title: data.title, description: data.description, images: [data.image] }
  };
}

export default async function BlogPost({ params }) {
  const data = await getPostData((await params).slug);

  if (!data) return <div>Article not found</div>;

  const content = data.content || "";
  const htmlContent = content.split('\n\n').map(para => {
    let processed = para
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim, '<a href="$2" target="_blank" rel="nofollow">$1</a>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
    return `<p style="margin-bottom: 20px; line-height: 1.8;">${processed}</p>`;
  }).join('');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{data.title}</h1>
      
      {/* إضافة المصداقية (تاريخ النشر واسم المؤلف) */}
      <div style={{ color: '#666', marginBottom: '20px', fontSize: '0.9rem' }}>
        <span>Published: {data.date || 'July 2026'}</span> | <span>By: Hammam Kalid</span>
      </div>

      {data.image && <img src={data.image} alt={data.imageAlt} style={{ width: '100%', borderRadius: '15px' }} />}
      
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      {/* إضافة قسم المؤلف في نهاية المقالة */}
      <div style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
        <h3>About the Author</h3>
        <p>Hammam Kalid - An AI specialist and tech analyst dedicated to exploring the future of innovation.</p>
      </div>
    </article>
  );
}
