import Link from 'next/link';

export default function ArticleCard({ title, excerpt, slug, image }) {
  return (
    <div className="card">
      {/* عرض الصورة بشكل متجاوب */}
      {image && (
        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px' }} 
        />
      )}
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <a href={`/blog/${slug}`}>Read More →</a>
    </div>
  );
}
