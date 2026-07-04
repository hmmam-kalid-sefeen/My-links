import fs from 'fs';
import path from 'path';

async function getPostData(slug) {
  // المسار الصحيح للمجلد في الجذر (Root/posts)
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found at: ${filePath}`); // هذا سيظهر في Vercel Logs
    return null;
  }
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);
  
  if (!data) return { title: "Article Not Found" };

  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: data.canonical },
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.image],
    }
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Article not found</h1>
        <p>الرجاء التأكد من أن ملف {slug}.json موجود في مجلد posts في جذر المشروع.</p>
      </div>
    );
  }

  const content = data.content || data.description || "";
  const formattedContent = content
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim, '<a href="$2" style="color:#2563eb; text-decoration:underline; font-weight:bold;" target="_blank" rel="nofollow">$1</a>')
    .replace(/^### (.*$)/gim, '<h3 style="margin-top:20px; font-weight:bold;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="margin-top:25px; font-weight:bold;">$1</h2>')
    .replace(/\*\*(.*)\*\*/gim, '<strong style="font-weight:bold;">$1</strong>')
    .replace(/\n/g, '<br />');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.8' }}>
      <h1>{data.title}</h1>
      {data.image && <img src={data.image} alt={data.imageAlt || data.title} style={{ width: '100%', borderRadius: '15px' }} />}
      
      <div dangerouslySetInnerHTML={{ __html: formattedContent }} />

      <hr style={{ margin: '40px 0' }} />
      <p style={{ fontSize: '0.8rem', color: '#777', textAlign: 'center' }}>
        Disclosure: This article contains affiliate links. Read our <a href="/terms">Terms of Service</a>.
      </p>
    </article>
  );
}
