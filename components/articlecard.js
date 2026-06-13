import Link from 'next/link';

export default function ArticleCard({ title, excerpt, slug }) {
  return (
    <div className="card" style={{ padding: '20px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link href={`/blog/${slug}`}>Read More →</Link>
    </div>
  );
}
