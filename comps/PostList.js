'use client'; // هذا السطر هو الحل الأساسي لأنه يسمح باستخدام onError

import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '12px', backgroundColor: 'white' }}>
            <img 
              src={post.image} 
              alt={post.title} 
              style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} 
              onError={(e) => { e.target.src = "/default-image.jpg"; }} 
            />
            <h3 style={{ fontSize: '1rem', margin: 0, color: 'black' }}>{post.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
