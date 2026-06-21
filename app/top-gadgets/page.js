import ArticleCard from '../../comps/articlecard';
import fs from 'fs';
import path from 'path';

export default async function TopGadgetsPage() {
  // قراءة جميع المقالات
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  // تصفية المقالات (نفترض أن كل مقال يحتوي على خاصية category)
  const filteredPosts = posts.filter(post => post.category === 'Top Gadgets');

  return (
    <main style={{ padding: '20px' }}>
      <h1>Top Gadgets Articles</h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {filteredPosts.map(post => (
          <ArticleCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
