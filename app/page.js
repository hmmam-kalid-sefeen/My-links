import fs from 'fs';
import path from 'path';
import Hero from '../comps/hero';
import CategoryCard from '../comps/categorycard';
import styles from './home.module.css';
import PostList from '../comps/PostList'; // تأكد أن المكون موجود في هذا المسار

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  let posts = [];

  try {
    const filenames = fs.readdirSync(postsDirectory);
    posts = filenames.map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      
      // استخراج البيانات بمرونة (سواء من article_metadata أو المستوى الأول)
      const meta = data.article_metadata || data;
      
      return {
        title: meta.title || "عنوان المقالة",
        image: meta.image || "/default-image.jpg", // صورة افتراضية
        slug: meta.slug || filename.replace('.json', ''),
      };
    });
  } catch (error) {
    console.error("Error reading posts:", error);
  }

  return (
    <main className={styles.container}>
      {/* قسم الهيرو */}
      <div style={{ 
        background: 'linear-gradient(180deg, #1e3a8a 0%, #3b82f6 100%)',
        borderRadius: '40px',
        padding: '60px 20px',
        textAlign: 'center',
        color: 'white',
        marginBottom: '40px'
      }}>
        <Hero />
      </div>

      {/* قسم التصنيفات */}
      <section>
        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Featured Categories</h2>
        <div className={styles.categoriesGrid}>
          <CategoryCard title="Top Gadgets" image="/Gadget.jpg" />
          <CategoryCard title="Essential Software" image="/Software.jpg" />
        </div>
      </section>


      {/* التعديل هنا باستخدام slice(0, 3) */}
{articles.slice(0, 3).map((article) => (
  <div key={article.slug} className="article-card">
    {/* محتوى المقالة */}
  </div>
))}

    </main>
  );
}
