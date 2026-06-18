import Navbar from '../components/navbar';
import Hero from '../components/hero';
import CategoryCard from '../components/categorycard';
import ArticleCard from '../components/articlecard';
import Footer from '../components/footer';
import styles from './home.module.css';

export default function Home({ posts = [] }) {
  return (
    <>
      {/* القسم الأزرق العلوي */}
 <div style={{ 
  // تدرج كحلي احترافي (Navy Gradient)
  background: 'linear-gradient(135deg, #0f172a, #1e3a8a)', 
  borderBottomLeftRadius: '50px',
  borderBottomRightRadius: '50px',
  paddingBottom: '20px'
}}>
  <Navbar />
  <Hero />
</div>

      {/* المحتوى الرئيسي */}
      <main className={styles.container}>
        
        {/* قسم الفئات */}
        <section>
          <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Featured Categories</h2>
<div className={styles.categoriesGrid}>
  <CategoryCard 
    title="Top Gadgets" 
    image="/Gadget.jpg" // تأكد أن الصورة بهذا الاسم في مجلد public
  />
  <CategoryCard 
    title="Essential Software" 
    image="/Software.jpg" 
  />
</div>


        
        </section>

        {/* قسم المقالات */}
        <section>
          <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Latest Articles</h2>
          <div className={styles.grid}>
            {posts.map(post => (
              <ArticleCard key={post.slug} {...post} />
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
