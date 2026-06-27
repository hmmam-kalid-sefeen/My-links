import Link from 'next/link';

export default function CategoryCard({ title, image }) {
  // في CategoryCard.js
const linkPath = `/category/${title.toLowerCase().replace(' ', '-')}`;

  
  return (
    <Link href={linkPath} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ textAlign: 'center', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '15px', cursor: 'pointer', backgroundColor: 'white' }}>
        <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px', height: '200px' }} />
        <h3 style={{ marginTop: '15px', marginBottom: '5px' }}>{title}</h3>
      </div>
    </Link>
  );
}
