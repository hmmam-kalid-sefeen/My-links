import Link from 'next/link';

export default function Hero() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Discover the Best Tech Tools & Software</h1>
      <Link href="#categories" style={{ padding: '10px 30px', backgroundColor: 'white', borderRadius: '20px', color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>
        Explore Now
      </Link>
    </div>
  );
}
