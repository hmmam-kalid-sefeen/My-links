import styles from './index.module.css';
import Link from 'next/link';
import products from '../products.json';
import links from '../link.json';

export default function Home() {
  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img
          src="/Logo.png"
          alt="My Store Logo"
          style={{ width: '150px', borderRadius: '50%' }}
        />
        <h1>9smart</h1>
      </div>

      {/* عرض المنتجات */}
      <div>
        {products.map(product => (
          <div key={product.slug}>
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </div>
        ))}
      </div>

);}
