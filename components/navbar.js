import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px', color: '#0f172a' }}>9smart</div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="#">Features ▾</Link>
        <Link href="#">About ▾</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <button style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', border: 'none' }}>Get Started</button>
    </nav>
  );
}
