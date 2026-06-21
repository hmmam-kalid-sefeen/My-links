import Link from 'next/link';

export default function ArticleCard({ title, image, excerpt, slug }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} style={{ width: '100%' }} />}
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link href={`/blog/${slug}`}>Read More →</Link>
    </div>
  );
}
