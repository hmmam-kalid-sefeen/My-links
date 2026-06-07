import fs from 'fs';
import path from 'path';

export default function Post({ post }) {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* هنا ستضع روابط العمولة لاحقاً */}
    </div>
  );
}

// هذه الدالة تجعل Next.js يعرف قائمة المقالات الموجودة
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'first-article' } }],
    fallback: false,
  };
}

// هذه الدالة تجلب محتوى المقال بناءً على الرابط
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.json`);
  const post = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { post } };
}
