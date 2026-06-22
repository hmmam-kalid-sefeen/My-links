import fs from 'fs';
import path from 'path';
// استدعاء ملف التنسيقات (تأكد من مساره الصحيح في مشروعك)
import styles from './blog.module.css'; 

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return <main style={{ padding: '20px' }}><h1>عذراً، المقالة غير موجودة.</h1></main>;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  const title = data.article_metadata?.title || "عنوان المقال";
  // دمج النصوص لضمان ظهورها
  const content = data.article_structure?.introduction?.narrative || 
                  data.article_structure?.key_sections?.map(s => `${s.heading}\n\n${s.content}`).join("\n\n") ||
                  "المحتوى غير متوفر.";

  return (
    // استخدام كلاس الـ styles هنا لضمان تطبيق التنسيقات
    <main className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        {content}
      </div>
    </main>
  );
}
