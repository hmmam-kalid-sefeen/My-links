import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function CategoryPage({ posts, category }) {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{category.toUpperCase()} Articles</h1>
      
      {/* إضافة شرط للتأكد من وجود مقالات */}
      {posts && posts.length > 0 ? (
        posts.map(post => (
          <div key={post.slug} style={{ borderBottom: '1px solid #ddd', padding: '15px 0' }}>
            <Link href={`/blog/${post.slug}`}>
              <h3 style={{ cursor: 'pointer', color: '#0070f3', margin: '0' }}>{post.title}</h3>
            </Link>
          </div>
        ))
      ) : (
        <p>No articles found in this category. Make sure the category field in your JSON file is exactly "tech".</p>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'tech' } },
      { params: { slug: 'software' } },
      { params: { slug: 'marketing' } },
      { params: { slug: 'web' } }
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const allPosts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  });
  
  const posts = allPosts.filter(post => post.category === params.slug);
  
  return { props: { posts, category: params.slug } };
}
