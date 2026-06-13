import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';

export default function Home({ posts }) {
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
