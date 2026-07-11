import fs from 'fs';
import path from 'path';

async function getPostData(slug) {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Critical error in getPostData:", error);
    return null;
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  // حماية 1: إذا لم يوجد ملف، لا تنهار الصفحة
  if (!data) {
    return <div style={{ padding: '40px', textAlign: 'center' }}><h1>Article not found</h1></div>;
  }

  // حماية 2: تأكد أن المحتوى نصي
  const content = typeof data.content === 'string' ? data.content : "";
  const paragraphs = content.split('\n\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{data.title || "Untitled"}</h1>
      {data.image && <img src={data.image} alt={data.title} style={{ width: '100%' }} />}
      
      <div style={{ marginTop: '20px', lineHeight: '1.8' }}>
        {paragraphs.map((para, index) => {
          // عرض الفقرات كعناصر نصية آمنة (بدون dangerouslySetInnerHTML لمنع انهيار الصفحة)
          return (
            <p key={index} style={{ marginBottom: '20px' }}>
              {para}
            </p>
          );
        })}
      </div>
    </article>
  );
}
