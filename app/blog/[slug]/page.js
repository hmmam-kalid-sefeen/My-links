import fs from 'fs';
import path from 'path';

// دالة مساعدة آمنة لقراءة البيانات
async function getPostData(slug) {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filePath = path.join(postsDirectory, `${slug}.json`);
    
    // التحقق من وجود الملف
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading/parsing file:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);
  
  if (!data) return { title: "Article Not Found" };

  return {
    title: data.title || "9SMART Article",
    description: data.description || "Tech article by 9SMART",
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  // إذا لم توجد بيانات، نعرض رسالة واضحة بدلاً من انهيار الصفحة
  if (!data) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Article not found</h1>
        <p>We are sorry, but the page you are looking for does not exist.</p>
      </div>
    );
  }

  const content = data.content || "";
  
  // تقسيم النص إلى فقرات مع حماية من الأخطاء
  const paragraphs = content.split('\n\n').filter(p => p.trim() !== '');
  
  const htmlContent = paragraphs.map((para) => {
    let processed = para
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim, '<a href="$2" target="_blank" rel="nofollow">$1</a>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
      
    // إضافة وسم الفقرة فقط إذا لم يكن عنوناً
    if (processed.startsWith('## ') || processed.startsWith('### ')) {
      return processed
        .replace(/^## (.*$)/gim, '<h2 style="margin-top:25px; font-weight:bold;">$1</h2>')
        .replace(/^### (.*$)/gim, '<h3 style="margin-top:20px; font-weight:bold;">$1</h3>');
    }
    return `<p style="margin-bottom: 20px; line-height: 1.8;">${processed}</p>`;
  }).join('');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{data.title}</h1>
      
      <div style={{ color: '#666', marginBottom: '20px', fontSize: '0.9rem' }}>
        <span>Published: {data.date || 'July 2026'}</span> | <span>By: Hammam Kalid</span>
      </div>

      {data.image && (
        <img 
          src={data.image} 
          alt={data.imageAlt || data.title} 
          style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} 
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      )}
      
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <div style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
        <h3>About the Author</h3>
        <p>Hammam Kalid - An AI specialist and tech analyst dedicated to exploring the future of innovation.</p>
      </div>
    </article>
  );
}
