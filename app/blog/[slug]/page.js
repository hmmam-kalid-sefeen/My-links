import fs from 'fs';
import path from 'path';

// وظيفة مساعدة لجلب البيانات
async function getPostData(slug) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// إضافة Metadata لتحسين الـ SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);
  
  if (!data) return { title: "Not Found" };

  return {
    title: data.title,
    description: data.description || data.excerpt,
    alternates: {
      canonical: data.canonical,
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) {
    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>المقالة غير موجودة</h1>;
  }

  const content = data.content || data.description || "المحتوى غير متوفر.";

  // التنسيق المصحح: استخدام $1 فقط للعناوين
  const formattedContent = content
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim, '<a href="$2" style="color:#2563eb; text-decoration:underline; font-weight:bold;" target="_blank" rel="nofollow">$1</a>')
    .replace(/^### (.*$)/gim, '<h3 style="margin-top:20px; font-weight:bold;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="margin-top:25px; font-weight:bold;">$1</h2>')
    .replace(/\*\*(.*)\*\*/gim, '<strong style="font-weight:bold;">$1</strong>')
    .replace(/\n/g, '<br />');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.8', color: '#333' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: '#000' }}>{data.title}</h1>
      
      {data.image && (
        <img 
          src={data.image} 
          alt={data.imageAlt || data.title} 
          style={{ width: '100%', borderRadius: '15px', marginBottom: '25px' }} 
        />
      )}
      
      <div 
        style={{ fontSize: '1.2rem' }}
        dangerouslySetInnerHTML={{ __html: formattedContent }} 
      />

      <hr style={{ margin: '40px 0', borderColor: '#eee' }} />
      <p style={{ fontSize: '0.85rem', color: '#777', textAlign: 'center', fontStyle: 'italic' }}>
        Disclosure: This article may contain affiliate links. We may earn a commission from qualifying purchases at no extra cost to you. 
        Read our full <a href="/terms" style={{ color: '#2563eb', textDecoration: 'underline' }}>Terms of Service</a> for more details.
      </p>
    </article>
  );
}
