import Hero from '../comps/hero';
import CategoryCard from '../comps/categorycard';
import styles from './home.module.css';
import fs from 'fs';
import path from 'path';
import Link from 'next/link'; // تأكد من إضافة هذا السطر

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
        borderBottomLeftRadius: '50px',
        borderBottomRightRadius: '50px',
        borderTopLeftRadius: '50px',
        borderTopRightRadius: '50px',
        padding: '40px 10px',
        marginBottom: '40px'
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
        
        {/* استخدمنا المتغير الصحيح posts بدلاً من latestPosts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px', 
                padding: '10px', 
                border: '1px solid #e5e7eb', 
                borderRadius: '12px' 
              }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    objectFit: 'cover', 
                    borderRadius: '8px' 
                  }} 
                />
                <h3 style={{ fontSize: '1rem', margin: 0 }}>{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
