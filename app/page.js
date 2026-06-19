
import Hero from '../components/hero';
import CategoryCard from '../components/categorycard';
import ArticleCard from '../components/articlecard';

import styles from '../components/home.module.css';
import fs from 'fs';
import path from 'path';

// تحويل المكون إلى async ليتمكن من جلب البيانات مباشرة
export default async function Home() {
  
  // دالة جلب البيانات مباشرة داخل المكون (بديل getStaticProps)
  let posts = [];
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);
    posts = filenames.map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    });
  } catch (error) {
    console.error("Error loading posts:", error);
  }

  return (
    <>
      <div style={{ 
        background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        paddingTop: '10px',
        paddingBottom: '30px'
      }}>
        {/* ملاحظة: بما أنك تستخدم layout.js، قد لا تحتاج Navbar هنا */}

        <div style={{ marginTop: '-20px' }}>
           <Hero />
        </div>
      </div>

      <main className={styles.container}>
        <section>
          <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Featured Categories</h2>
          <div className={styles.categoriesGrid}>
            <CategoryCard title="Top Gadgets" image="/Gadget.jpg" />
            <CategoryCard title="Essential Software" image="/Software.jpg" />
          </div>
        </section>

        <section>
          <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Latest Articles</h2>
          <div className={styles.grid}>
            {posts.map(post => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </main>

    </>
  );
}
