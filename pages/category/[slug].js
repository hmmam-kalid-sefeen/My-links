import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function CategoryPage({ posts, category }) {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{category} Articles</h1>
      {posts.map(post => (
        <div key={post.slug} style={{ borderBottom: '1px solid #ccc', margin: '20px 0' }}>
          <Link href={`/blog/${post.slug}`}><h2>{post.title}</h2></Link>
        </div>
      ))}
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
  const allPosts = filenames.map(filename => JSON.parse(fs.readFileSync(path.join(postsDirectory, filename), 'utf8')));
  
  // تصفية المقالات حسب التصنيف
  const posts = allPosts.filter(post => post.category === params.slug);
  
  return { props: { posts, category: params.slug } };
}
