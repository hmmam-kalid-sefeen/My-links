import styles from './home.module.css';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      {/* قسم الـ Hero */}
      <section className={styles.hero}>
        <h1>Discover the Best Tech Tools & Software</h1>
        <button>Explore Now</button>
      </section>

      {/* قسم المقالات (سيعرض ملفات الـ JSON الموجودة في مجلد posts) */}
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.slug}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}
// أضف هذا في أسفل ملف index.js لجلب المقالات
export async function getStaticProps() {
  // كود جلب الملفات من مجلد posts
  // تأكد أن هذا الكود لا يعيد 'undefined'
  return {
    props: {
      posts: [] // تأكد أنك تمرر المصفوفة هنا
    }
  }
}


