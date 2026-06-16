import Navbar from '../components/navbar';
import Hero from '../components/hero';
import CategoryCard from '../components/categorycard';
import ArticleCard from '../components/articlecard';
import Footer from '../components/footer';
import styles from './home.module.css';

export default function Home({ posts = [] }) {
  return (
    <>
      <Navbar />
      
      <main className={styles.container}>
        {/* قسم الـ Hero */}
        <Hero />

        {/* قسم الفئات */}
        <section>
          <h2 style={{ textAlign: 'center', margin: '40px 0' }}>Featured Categories</h2>
          <div className={styles.categoriesGrid}>
             <CategoryCard title="Top Gadgets" icon="💻" />
             <CategoryCard title="Essential Software" icon="⚙️" />
          </div>
        </section>
{/* قسم المقالات (Latest Articles) */}
<section>
  <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Latest Articles</h2>
  <div className={styles.grid}>
    {posts.map(post => (
      <div key={post.slug} className={styles.card}>
        {/* هنا نضع مكون المقال */}
        <ArticleCard {...post} />
      </div>
    ))}
  </div>
</section>

    
      </main>

      <Footer />
    </>
  );
}

// دالة جلب البيانات (تأكد أن مجلد posts موجود في المسار الرئيسي)
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    });

    return {
      props: { posts },
    };
  } catch (error) {
    return {
      props: { posts: [] },
    };
  }
}
