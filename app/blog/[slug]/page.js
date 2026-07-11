import fs from 'fs';
import path from 'path';

async function getPostData(slug) {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading post:", error);
    return null;
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div style={{ padding: '40px', textAlign: 'center' }}><h1>Article not found</h1></div>;

  // تقسيم النص إلى مصفوفة فقرات بناءً على السطر الفارغ
  const paragraphs = (data.content || "").split('\n\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.8' }}>
      <h1>{data.title}</h1>
      
      {data.image && (
        <img src={data.image} alt={data.title} style={{ width: '100%', borderRadius: '15px' }} />
      )}
      
      <div style={{ marginTop: '20px' }}>
        {paragraphs.map((para, index) => {
          // تنسيق الفقرة (تحويل الروابط والنصوص العريضة)
          const formattedText = para
            .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" style="color:blue">$1</a>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

          // عرض العنوان (إذا بدأت الفقرة بـ ##)
          if (para.startsWith('## ')) {
            return <h2 key={index} style={{ marginTop: '30px' }}>{para.replace('## ', '')}</h2>;
          }
          
          // عرض العنوان الفرعي (إذا بدأت بـ ###)
          if (para.startsWith('### ')) {
            return <h3 key={index} style={{ marginTop: '20px' }}>{para.replace('### ', '')}</h3>;
          }

          // عرض الفقرة العادية
          return (
            <p 
              key={index} 
              style={{ marginBottom: '20px' }} 
              dangerouslySetInnerHTML={{ __html: formattedText }} 
            />
          );
        })}
      </div>
    </article>
  );
}
