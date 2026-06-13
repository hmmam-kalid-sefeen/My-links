import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>9smart</div>
      <div>
        <Link href="/">Home</Link> | <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
