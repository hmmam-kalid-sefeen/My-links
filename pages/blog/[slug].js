import fs from 'fs';
import path from 'path';

export default function Post({ post }) {
  if (!post) return <div>جاري التحميل...</div>;
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);
    const paths = filenames
      .filter(filename => filename.endsWith('.json'))
      .map((filename) => ({
        params: { slug: filename.replace('.json', '') },
      }));
    return { paths, fallback: false };
  } catch (error) {
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${params.slug}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const post = JSON.parse(fileContents);
    return { props: { post } };
  } catch (error) {
    return { notFound: true };
  }
}
