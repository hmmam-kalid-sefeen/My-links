import Link from 'next/link';
import products from '../products.json';
import links from '../link.json';


export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* عرض الشعار من مجلد public */}
      <img src="/Logo.PNG" alt="My Store Logo" style={{ width: '150px', marginBottom: '20px' }} />
      
      <h1>Welcome to Our Store</h1>
      <p>Discover our range of professional equipment.</p>
      
      {/* بقية كود عرض المنتجات */}
      <div>
        {products.map(product => (
          <div key={product.slug} style={{ margin: '10px' }}>
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
