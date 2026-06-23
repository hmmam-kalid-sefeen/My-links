import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  // 1. استخراج الـ slug بأمان
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  // 2. التحقق من وجود الملف
  if (!fs.existsSync(filePath)) {
    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>المقالة غير موجودة</h1>;
  }

  // 3. قراءة وتحليل بيانات المقالة
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const meta = data.article_metadata || data;
  
  // اختيار المحتوى (البحث في عدة حقول لضمان عدم ظهوره فارغاً)
  const content = data.description || data.content || "المحتوى غير متوفر.";

  // 4. تحويل رموز Markdown إلى HTML يدويًا لضمان التنسيق بدون مكتبات خارجية
  const formattedContent = content
    .replace(/^### (.*$)/gim, '<h3 style="margin-top:20px; font-weight:bold;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="margin-top:25px; font-weight:bold;">$1</h2>')
    .replace(/\*\*(.*)\*\*/gim, '<strong style="font-weight:bold;">$1</strong>')
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
      {/* عنوان المقال */}
      <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: '#000' }}>{meta.title}</h1>
      
      {/* صورة المقال */}
      {meta.image && (
        <img 
          src={meta.image} 
          alt={meta.title} 
          style={{ width: '100%', borderRadius: '15px', marginBottom: '25px' }} 
        />
      )}
      
      {/* عرض المحتوى المنسق */}
      <div 
        style={{ fontSize: '1.2rem' }}
        dangerouslySetInnerHTML={{ __html: formattedContent }} 
      />
    </article>
  );
}
