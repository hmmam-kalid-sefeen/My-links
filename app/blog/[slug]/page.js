import fs from 'fs';
import path from 'path';

// دالة لجلب البيانات مع معالجة الأخطاء
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

  // حماية: إذا لم توجد بيانات، عرض رسالة بدلاً من الانهيار
  if (!data) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Article not found</h1>
      </div>
    );
  }

  // معالجة المحتوى بطريقة آمنة جداً
  const content = data.content || "";
  
  // تقسيم النص إلى فقرات (تحويل \n\n إلى مصفوفة)
  const paragraphs = content.split('\n\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.8' }}>
      <h1>{data.title || "Untitled"}</h1>
      
      {data.image && (
        <img 
          src={data.image} 
          alt={data.imageAlt || data.title} 
          style={{ width: '100%', borderRadius: '15px' }} 
        />
      )}
      
      <div style={{ marginTop: '20px' }}>
        {paragraphs.map((para, index) => {
          // تحويل بسيط للروابط والعناوين داخل الفقرات
          const processed = para
            .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" style="color:blue">$1</a>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

          // عرض العناوين أو الفقرات
          if (para.startsWith('## ')) return <h2 key={index}>{para.replace('## ', '')}</h2>;
          if (para.startsWith('### ')) return <h3 key={index}>{para.replace('### ', '')}</h3>;
          
          return <p key={index} dangerouslySetInnerHTML={{ __html: processed }} />;
        })}
      </div>
    </article>
  );
}
