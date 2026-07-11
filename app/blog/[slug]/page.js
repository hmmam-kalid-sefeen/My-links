import fs from 'fs';
import path from 'path';

// دالة جلب البيانات مع إضافة حماية ضد الأخطاء
async function getPostData(slug) {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filePath = path.join(postsDirectory, `${slug}.json`);
    
    if (!fs.existsSync(filePath)) return null;
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading post:", error);
    return null;
  }
}

export default async function BlogPost({ params }) {
  // استخدام await لـ params (مهم في Next.js 15+)
  const { slug } = await params;
  const data = await getPostData(slug);

  // إذا فشل جلب البيانات، نعرض رسالة ودية بدلاً من انهيار الصفحة
  if (!data) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Article not found</h1>
        <p>We are currently updating our content.</p>
      </div>
    );
  }

  // التأكد من وجود محتوى لتجنب خطأ split
  const content = data.content || "";
  const paragraphs = content.split('\n\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.8' }}>
      <h1>{data.title || "Untitled Article"}</h1>
      
      {data.image && (
        <img 
          src={data.image} 
          alt={data.title} 
          style={{ width: '100%', borderRadius: '15px' }} 
        />
      )}
      
      <div style={{ marginTop: '20px' }}>
        {paragraphs.map((para, index) => {
          // التعامل الآمن مع الفقرات
          if (para.startsWith('## ')) {
            return <h2 key={index} style={{ marginTop: '25px' }}>{para.replace('## ', '')}</h2>;
          }
          if (para.startsWith('### ')) {
            return <h3 key={index} style={{ marginTop: '20px' }}>{para.replace('### ', '')}</h3>;
          }
          return <p key={index} style={{ marginBottom: '20px' }}>{para}</p>;
        })}
      </div>
    </article>
  );
}
