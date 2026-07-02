import fs from 'fs';
import path from 'path';
import Hero from '../comps/hero';
import CategoryCard from '../comps/categorycard';
import styles from './home.module.css';
import PostList from '../comps/PostList';

export default async function Home() {
  let posts = [];
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    if (fs.existsSync(postsDirectory)) {
      const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.json'));
      posts = filenames.map(filename => {
        const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
        const data = JSON.parse(fileContents);
        const meta = data?.article_metadata || data || {};
        return {
          title: meta.title || "Untitled",
          image: meta.image || "/default-image.jpg",
          slug: meta.slug || filename.replace('.json', ''),
          date: meta.date || "1970-01-01"
        };
      }).sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  } catch (err) {
    console.error("Critical error:", err);
  }

  return (
    <main className={styles.container}>
      <Hero />
      <section>
        <div className={styles.categoriesGrid}>
          <CategoryCard title="Top Gadgets" image="/Gadget.jpg" />
          <CategoryCard title="Essential Software" image="/Software.jpg" />
        </div>
      </section>
      <section>
        <h2>Latest Articles</h2>
        {posts.length > 0 ? (
          <PostList posts={posts.slice(0, 3)} />
        ) : (
          <p>Loading articles...</p>
        )}
      </section>
    </main>
  );
}
