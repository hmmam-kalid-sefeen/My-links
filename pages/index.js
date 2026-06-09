import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import styles from './styles/home.module.css'; 

export default function Home({ posts }) {
  // هذا الكود يجب أن يكون قبل الـ return مباشرة
  const categories = [...new Set(posts.map(p => p.category))];

  return (
    <div className={styles.container}>
      <img src="/logo.png" alt="Logo" className={styles.logo} />
      <h1>Welcome to 9smart</h1>
      
      {categories.map(cat => (
        <section key={cat} className={styles.categorySection}>
          <h2>{cat}</h2>
          {posts.filter(p => p.category === cat).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.linkItem}>
              <h3>{post.title}</h3>
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
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  return { props: { posts } };
}
