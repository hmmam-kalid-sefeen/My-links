export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div>Article not found</div>;

  // 1. تقسيم النص إلى فقرات بناءً على السطر الفارغ
  // تأكد أن ملفات JSON لديك تحتوي على سطر فارغ \n\n للفصل بين الفقرات
  const paragraphs = (data.content || "").split('\n\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.8' }}>
      <h1>{data.title}</h1>
      
      {/* 2. عرض الفقرات بشكل منفصل */}
      {paragraphs.map((para, index) => {
        // إذا كان السطر يبدأ بـ ## فهو عنوان
        if (para.startsWith('## ')) {
          return <h2 key={index} style={{ marginTop: '25px' }}>{para.replace('## ', '')}</h2>;
        }
        
        // غير ذلك فهي فقرة نصية
        return (
          <p key={index} style={{ marginBottom: '20px' }}>
            {para}
          </p>
        );
      })}
    </article>
  );
}
