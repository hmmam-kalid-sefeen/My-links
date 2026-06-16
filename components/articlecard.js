import Link from 'next/link';

export default function ArticleCard({ title, excerpt, slug }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      transition: '0.3s',
      border: '1px solid #f1f5f9',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ height: '150px', background: '#e2e8f0', borderRadius: '15px', marginBottom: '15px' }}>
        {/* هنا ستضع صورة المقال لاحقاً */}
      </div>
      <h3 style={{ fontSize: '18px', color: '#0f172a', marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px', flexGrow: 1 }}>{excerpt}</p>
      <Link href={`/blog/${slug}`} style={{ color: '#3b82f6', fontWeight: 'bold' }}>
        Read More →
      </Link>
    </div>
  );
}
