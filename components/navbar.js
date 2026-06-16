import Link from 'next/link';
import styles from '../pages/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>9smart</div>
      
      <div className={styles.links}>
        {/* حذفنا الأسهم ▾ من هنا */}
        <Link href="#">Features</Link> 
        <Link href="#">About</Link>
        <Link href="/blog">Blog</Link>
      </div>

      {/* الزر تم حذفه أو إخفاؤه بـ CSS */}
    </nav>
  );
}
