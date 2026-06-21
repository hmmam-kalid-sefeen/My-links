import ArticleCard from '../../comps/articlecard';
import fs from 'fs';
import path from 'path';

export default async function TopGadgetsPage() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  // التأكد من تطابق الحالة (Case sensitivity)
  // ملفك يحتوي على "top gadgets" (حروف صغيرة)، لذا نستخدمها هنا
  const filteredPosts = posts.filter(post => post.category === 'top gadgets');

  return (
    <main style={{ padding: '20px' }}>
      <h1>Top Gadgets</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredPosts.map(post => (
          <ArticleCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
