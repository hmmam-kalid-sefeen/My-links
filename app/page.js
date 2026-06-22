import Hero from '../comps/hero';
import CategoryCard from '../comps/categorycard';
import ArticleCard from '../comps/articlecard';
import styles from './home.module.css';
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
  borderBottomLeftRadius: '50px', // التحكم في الزاوية اليسرى السفلية
  borderBottomRightRadius: '50px', // التحكم في الزاوية اليمنى السفلية
  borderTopLeftRadius: '50px',     // أضفنا زاوية علوية يسار
  borderTopRightRadius: '50px',    // أضفنا زاوية علوية يمين
  padding: '40px 10px',            // تحسين المسافات الداخلية
  marginBottom: '40px'             // ترك مسافة بين الهيرو وباقي الصفحة
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
      {/* حاوية المقالات الجديدة (تأكد من استخدام flexDirection: 'column' لجعلها قائمة) */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
  {latestPosts.map((post) => (
    <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '15px', 
        padding: '10px', 
        border: '1px solid #e5e7eb', 
        borderRadius: '12px' 
      }}>
        {/* الصورة المصغرة */}
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
        
        {/* العنوان */}
        <h3 style={{ fontSize: '1rem', margin: 0 }}>{post.title}</h3>
      </div>
    </Link>
  ))}
</div>

      </section>
    </main>
  );
}
