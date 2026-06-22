import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function HomePage() {
  // 1. جلب البيانات
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const latestPosts = filenames.map(filename => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
    return JSON.parse(fileContents);
  });

  return (
    <main>
      {/* 2. هنا نضع الهيرو (Hero Section) الذي كان موجوداً سابقاً */}
      <section style={{ padding: '40px', textAlign: 'center', backgroundColor: '#0a192f', color: 'white', borderRadius: '20px' }}>
        <h1>Discover the Best Tech Tools & Software</h1>
        <p>مرحباً بك في موقعنا، نساعدك في اختيار أفضل الأدوات التقنية...</p>
      </section>

      {/* 3. هنا قسم التصنيفات (يمكنك إضافته إذا كان لديك كود لعرضه) */}
      <section style={{ padding: '20px' }}>
        <h2>Featured Categories</h2>
        {/* ... كود عرض التصنيفات هنا ... */}
      </section>

      {/* 4. هنا قسم المقالات الجديد (الذي قمنا بتنسيقه) */}
      <section style={{ padding: '20px' }}>
        <h2>Latest Articles</h2>
        <div style={{ display: 'flex', flexDirection
