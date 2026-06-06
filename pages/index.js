import Link from 'next/link';
import products from '../products.json';
import links from '../link.json';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* جزء الشعار */}
      <img
        src="/Logo.PNG"
        alt="My Store Logo"
        style={{ width: '150px', borderRadius: '50%' }}
      />
      <h1>Welcome to Our Store</h1>

      {/* عرض المنتجات */}
      <div>
        {products.map((product) => (
          <div key={product.slug}>
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </div>
        ))}
      </div>

      {/* قسم الروابط */}
      <div style={{ marginTop: '40px' }}>
        <h2>مواقع مفيدة</h2>

        {links.map((link) => (
          <div key={link.url} style={{ marginBottom: '15px' }}>
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
