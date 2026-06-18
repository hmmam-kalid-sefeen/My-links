import Link from 'next/link';

export default function ArticleCard({ title, excerpt, slug, image }) {
  return (
    <div className="card">
      {image && (
        <img 
          src={image || '/default-placeholder.jpg'} 
          alt={title} 
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px' }} 
        />
      )}
      <h3>{title}</h3>
      <p>{excerpt}</p>
      {/* التعديل هنا: استخدام Link بدلاً من a */}
      <Link href={`/blog/${slug}`}>
        Read More →
      </Link>
    </div>
  );
}
