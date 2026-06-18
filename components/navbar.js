import Link from 'next/link';
import styles from '../pages/navbar.module.css';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <Link href="/">9smart</Link>
      <Link href="/features">Features</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
