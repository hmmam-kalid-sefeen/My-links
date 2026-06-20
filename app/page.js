import Hero from '../comps/hero';
import CategoryCard from '../comps/categorycard';
import ArticleCard from '../comps/articlecard';
import styles from '../comps/home.module.css';
import fs from 'fs';
import path from 'path';

export default async function Home() {
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
    <main className={styles.container}>
      <div style={{ 
        background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        paddingTop: '10px',
        paddingBottom: '30px'
      }}>
        <div style={{ marginTop: '-20px' }}>
           <Hero />
        </div>
      </div>

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
  );
}
