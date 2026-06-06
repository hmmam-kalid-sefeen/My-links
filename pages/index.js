import styles from './index.module.css';
import Link from 'next/link';
import products from '../products.json';
import links from '../link.json';

type Product = {
  slug: string;
  name: string;
};

type LinkItem = {
  url: string;
  title: string;
  description: string;
};

export default function Home() {
  return (
    <div className={styles.container}>
      {/* الشعار */}
      <img
        src="/Logo.PNG"
        alt="My Store Logo"
        className={styles.logo}
      />

      <h1 className={styles.title}>Welcome to Our Store</h1>

      {/* المنتجات */}
      <div className={styles.products}>
        {(products as Product[]).map((product) => (
          <div key={product.slug} className={styles.product}>
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </div>
        ))}
      </div>

      {/* الروابط */}
      <div className={styles.linksSection}>
        <h2>مواقع مفيدة</h2>

        {(links as LinkItem[]).map((link) => (
          <div key={link.url} className={styles.linkItem}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
            <p>{link.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
