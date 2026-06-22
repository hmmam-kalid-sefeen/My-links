import Hero from '../comps/hero';
import CategoryCard from '../comps/categorycard';
import styles from './home.module.css';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    const meta = data.article_metadata || data;
    
    return {
      title: meta.title || "عنوان المقالة",
      image: meta.image || "/default-image.jpg",
      slug: meta.slug || filename.replace('.json', ''),
    };
  });

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

      <section>
        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Featured Categories</h2>
        <div className={styles.categoriesGrid}>
          <CategoryCard title="Top Gadgets" image="/Gadget.jpg" />
          <CategoryCard title="Essential Software" image="/Software.jpg" />
        </div>
      </section>

      <section>
        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Latest Articles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '12px', backgroundColor: 'white' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} 
                />
                <h3 style={{ fontSize: '1rem', margin: 0, color: 'black' }}>{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
