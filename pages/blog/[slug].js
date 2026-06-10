import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default function PostPage({ post }) {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '20px' }}>{post.title}</h1>
      <ReactMarkdown
        components={{
          h1: ({node, ...props}) => <h1 style={{color: '#2c3e50'}} {...props} />,
          h2: ({node, ...props}) => <h2 style={{color: '#34495e', marginTop: '20px'}} {...props} />,
          p: ({node, ...props}) => <p style={{lineHeight: '1.6', marginBottom: '15px'}} {...props} />,
          img: ({node, ...props}) => (
            <img style={{maxWidth: '100%', margin: '20px 0'}} {...props} />
          ),
          ul: ({node, ...props}) => <ul style={{paddingLeft: '20px', marginBottom: '15px'}} {...props} />,
          li: ({node, ...props}) => <li style={{marginBottom: '8px'}} {...props} />
        }}
      >
        {post.content}
      </ReactMarkdown>
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
