import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import styles from './post.module.css';

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

  const paths = filenames.map(filename => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const post = JSON.parse(fileContents);
    return { params: { slug: post.slug } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDir = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDir, `${params.slug}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const post = JSON.parse(fileContents);

  return { props: { post } };
}
