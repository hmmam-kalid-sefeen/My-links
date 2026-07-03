import styles from './post.module.css'; // تأكد من وجود ملف الـ CSS الخاص بك

export default function PostPage({ post }) {
  // هذا الكود يفترض أنك تمرر بيانات المقال (post) للصفحة
  return (
    <article className={styles.article}>
      <h1>{post.title}</h1>

      {/* جدول المحتويات اليدوي */}
      {post.toc && post.toc.length > 0 && (
        <nav className={styles.toc}>
          <h3>Table of Contents</h3>
          <ul>
            {post.toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* عرض المحتوى المحول لـ HTML */}
      <div 
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
}
