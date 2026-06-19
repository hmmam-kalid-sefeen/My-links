import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import styles from '../home.module.css'; // استخدم الملف الموجود عندك

export default function PostPage({ post }) {
  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  const paths = filenames.map(filename => ({
    params: { slug: filename.replace('.json', '') }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDir = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDir, `${params.slug}.json`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const post = JSON.parse(fileContent);

  return { props: { post } };
}
