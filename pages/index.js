import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Welcome to 9smart</h1>
      
      {/* هنا يتم عرض البطاقات والمقالات */}
      <section>
        <h2>Tech Gadgets</h2>
        {posts
          .filter(post => post.category === 'tech')
          .map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div>{post.title}</div>
            </Link>
          ))}
      </section>
    </div>
  );
}

// هذه الدالة هي المسؤولة عن قراءة الملفات من المجلد "posts"
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  });

  return { props: { posts } };
}
