import fs from 'fs';
import path from 'path';
import Hero from '../comps/hero';
import CategoryCard from '../comps/categorycard';
import styles from './home.module.css';
import PostList from '../comps/PostList';

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  let posts = [];

  try {
    const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.json'));
    posts = filenames.map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      const meta = data?.article_metadata || data || {};
      
      return {
        title: meta?.title || "عنوان المقالة",
        image: meta?.image || "/default-image.jpg",
        slug: meta?.slug || filename.replace('.json', ''),
      };
    });
  } catch (error) {
    console.error("Error reading posts:", error);
  }

  const latestPosts = posts.slice(0, 3);

  return (
    <main className={styles.container}>
      <div style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #3b82f6 100%)', borderRadius: '40px', padding: '60px 20px', textAlign: 'center', color: 'white', marginBottom: '40px' }}>
        <Hero />
      </div>
      <section>
        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Featured Categories</h2>
        <div className={styles.categoriesGrid}>
          <CategoryCard title="Top Gadgets" image="/Gadget.jpg" />
          <CategoryCard title="Essential Software" image="/Software.jpg" />
        </div>
      </section>
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ textAlign: 'center' }}>Latest Articles</h2>
        <div className={styles.postsGrid}>
          {latestPosts.map((post) => (
             <PostList key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
