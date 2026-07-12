import fs from 'fs';
import path from 'path';

// دالة لجلب البيانات بشكل آمن
async function getPostData(slug) {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div style={{ padding: '20px' }}><h1>Article not found</h1></div>;

  // تقسيم المحتوى إلى فقرات (تأكد أن ملفات JSON تحتوي على \n\n)
  const content = data.content || "";
  const lines = content.split('\n\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.8' }}>
      <h1>{data.title}</h1>
      {data.image && <img src={data.image} alt={data.title} style={{ width: '100%', borderRadius: '15px' }} />}
      
      <div style={{ marginTop: '20px' }}>
        {lines.map((line, index) => {
          // تنسيق العناوين (يحل مشكلة ظهور ### كنص)
          if (line.startsWith('### ')) return <h3 key={index}>{line.replace('### ', '')}</h3>;
          if (line.startsWith('## ')) return <h2 key={index}>{line.replace('## ', '')}</h2>;
          
          // عرض الفقرة العادية
          return <p key={index} style={{ marginBottom: '15px' }}>{line}</p>;
        })}
      </div>
    </article>
  );
}
