import fs from 'fs';
import path from 'path';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import CategoryCard from '../components/categorycard';
import ArticleCard from '../components/articlecard';
import Footer from '../components/footer';

export default function Home({ posts = [] }) { // أضفنا = [] لحماية الموقع من الانهيار إذا كانت البيانات فارغة
  return (
    <>
      <Navbar />
      <Hero />
      <div className="categories-grid">
         <CategoryCard title="Top Gadgets" icon="💻" />
         <CategoryCard title="Software" icon="⚙️" />
      </div>
      <div className="articles-grid">
         {posts.map(post => <ArticleCard key={post.slug} {...post} />)}
      </div>
      <Footer />
    </>
  );
}

// دالة جلب البيانات من مجلد posts
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  return {
    props: {
      posts,
    },
  };
}
