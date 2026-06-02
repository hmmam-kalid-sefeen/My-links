import Link from 'next/link';
import products from '../products.json';

export default function Home() {
  return (
    <div>
      <h1>مرحباً بك في متجري</h1>
      {products.map(product => (
        <div key={product.slug}>
          <Link href={`/product/${product.slug}`}>
            <a>{product.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
