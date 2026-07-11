import fs from 'fs';
import path from 'path';

async function getPostData(slug) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  
  if (!fs.existsSync(filePath)) {
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
      </div>
    );
  }

  // تحويل المحتوى إلى HTML منظم باستخدام الفقرات <p>
  const content = data.content || "";
  const htmlContent = content
    .split('\n\n') // تقسيم النص إلى فقرات بناءً على السطر الفارغ
    .map((para) => {
      // معالجة العناوين والروابط والتنسيق داخل كل فقرة
      let processed = para
        .replace(/^## (.*$)/gim, '<h2 style="margin-top:25px; font-weight:bold;">$1</h2>')
        .replace(/^### (.*$)/gim, '<h3 style="margin-top:20px; font-weight:bold;">$1</h3>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim, '<a href="$2" style="color:#2563eb; text-decoration:underline;" target="_blank" rel="nofollow">$1</a>')
        .replace(/\*\*(.*)\*\*/gim, '<strong style="font-weight:bold;">$1</strong>');

      // إذا كانت الفقرة تبدأ بوسم H2 أو H3 لا نضعها داخل <p> لتجنب تداخل الوسوم
      if (processed.startsWith('<h')) return processed;
      return `<p style="margin-bottom: 20px; line-height: 1.8;">${processed}</p>`;
    })
    .join('');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{data.title}</h1>
      {data.image && (
        <img 
          src={data.image} 
          alt={data.imageAlt || data.title} 
          style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} 
        />
      )}
      
      {/* عرض المحتوى المعالج */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <hr style={{ margin: '40px 0' }} />
      <p style={{ fontSize: '0.8rem', color: '#777', textAlign: 'center' }}>
        Disclosure: This article contains affiliate links. Read our <a href="/terms">Terms of Service</a>.
      </p>
    </article>
  );
}
