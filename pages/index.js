import Link from 'next/link';
import products from '../products.json';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* سنضيف اللوجو هنا لاحقاً */}
      <h1>Welcome to Our Store</h1>
      <p>Discover our range of professional equipment.</p>
      
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
