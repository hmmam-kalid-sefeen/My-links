import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  const categories = [
    { name: 'Tech Gadgets', icon: '💻', slug: 'tech' },
    { name: 'Software Tools', icon: '⚙️', slug: 'software' },
    { name: 'Digital Marketing', icon: '📈', slug: 'marketing' },
    { name: 'Web Development', icon: '🌐', slug: 'web' }
  ];

  return (
    <div className={styles.container}>
    
 <header className={styles.header}>
  <img 
    src="/logo.PNG" 
    alt="9smart logo" 
    width="150" 
    style={{ display: 'block', margin: '0 auto 20px' }} 
  />
  <h1>Welcome to 9smart</h1>
  <p>Your ultimate guide to tech, tools, and digital success in 2026.</p>
</header>


      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/category/${cat.slug}`}>
            <div className={styles.card}>
              <span className={styles.icon}>{cat.icon}</span>
              <h3>{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
