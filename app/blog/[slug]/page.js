import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>المقالة غير موجودة</h1>;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const meta = data.article_metadata || data;
  const content = data.description || data.content || "المحتوى غير متوفر.";

  // التعديل هنا: الترتيب في الـ replace يضمن عدم تداخل الروابط مع الرموز الأخرى
  const formattedContent = content
    // 1. تحويل الروابط أولاً (لأنها الأكثر حساسية)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim, '<a href="$2" style="color:#2563eb; text-decoration:underline; font-weight:bold;" target="_blank" rel="nofollow">$1</a>')
    // 2. تحويل العناوين
    .replace(/^### (.*$)/gim, '<h3 style="margin-top:20px; font-weight:bold;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="margin-top:25px; font-weight:bold;">$1</h2>')
    // 3. تحويل الخط العريض
    .replace(/\*\*(.*)\*\*/gim, '<strong style="font-weight:bold;">$1</strong>')
    // 4. تحويل فواصل الأسطر
    .replace(/\n/g, '<br />');

  return (
    <article style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px', 
      fontFamily: 'sans-serif', 
      lineHeight: '1.8', 
      color: '#333' 
    }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: '#000' }}>{meta.title}</h1>
      
      {meta.image && (
        <img 
          src={meta.image} 
          alt={meta.title} 
          style={{ width: '100%', borderRadius: '15px', marginBottom: '25px' }} 
        />
      )}
      
      <div 
        style={{ fontSize: '1.2rem' }}
        dangerouslySetInnerHTML={{ __html: formattedContent }} 
      />

       {/* Affiliate Disclosure in English */}
      <hr style={{ margin: '40px 0', borderColor: '#eee' }} />
      <p style={{ fontSize: '0.85rem', color: '#777', textAlign: 'center', fontStyle: 'italic' }}>
        Disclosure: This article may contains affiliate links. We may earn a commission from qualifying purchases at no extra cost to you. 
        Read our full <a href="/terms" style={{ color: '#2563eb', textDecoration: 'underline' }}>Terms of Service</a> for more details.
      </p>

    </article>
  );
}
