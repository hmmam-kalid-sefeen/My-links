import Navbar from '../components/navbar';
import Hero from '../components/hero';
import CategoryCard from '../components/categorycard';
import ArticleCard from '../components/articlecard';
import Footer from '../components/footer';

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
