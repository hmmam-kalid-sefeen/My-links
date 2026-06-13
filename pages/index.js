import Link from 'next/link';
import styles from './home.module.css'; // تأكد من المسار الصحيح

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <img src="/logo.PNG" alt="Logo" width="100" />
        <h1>Welcome to 9smart</h1>
        <p>Your ultimate guide to tech, tools, and digital success in 2026.</p>
      </header>

      <div className={styles.categories}>
        <Link href="/category/tech">
          <div className={styles.card}>
            <h3>Tech Gadgets</h3>
          </div>
        </Link>
        <Link href="/category/software">
          <div className={styles.card}>
            <h3>Software Tools</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
