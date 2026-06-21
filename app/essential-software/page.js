import ArticleCard from '../../comps/articlecard';
import fs from 'fs';
import path from 'path';

export default function EssentialSoftwarePage() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
    return JSON.parse(fileContents);
  });

  // هنا التعديل الوحيد: تغيير كلمة التصنيف لتطابق ما لديك في ملفات الـ JSON
  const filteredPosts = posts.filter(post => post.category === 'essential software');

  return (
    <main style={{ padding: '20px' }}>
      <h1>Essential Software</h1>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => <ArticleCard key={post.slug} {...post} />)
      ) : (
        <p>coming soon.</p>
      )}
    </main>
  );
}
