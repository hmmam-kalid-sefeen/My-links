import styles from '../styles/home.module.css'; // تأكد من مسار ملف الـ CSS الصحيح
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      {/* استعادة اللوجو */}
      <img src="/logo.png" alt="Logo" className={styles.logo} />
      <h1>Welcome to 9smart</h1>
      
      {/* هنا يأتي كود التصنيفات والمقالات الذي أرسلته لك سابقاً */}
    
    

import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Home({ posts }) {
  // تجميع المقالات حسب التصنيف
  const categories = [...new Set(posts.map(p => p.category))];

  return (
    <div>
      <h1>Welcome to 9smart</h1>
      {categories.map(cat => (
        <section key={cat}>
          <h2>{cat}</h2>
          {posts.filter(p => p.category === cat).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="post-card">
                <h3>{post.title}</h3>
              </div>
            </Link>
          ))}
        </section>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  });

  return { props: { posts } };
}
</div>
  );
}
