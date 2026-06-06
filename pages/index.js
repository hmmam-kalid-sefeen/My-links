export default function Home() {
  return (
    // هذا الـ div هو الحاوية الرئيسية التي تحمل كل التنسيقات
    <div style={{ textAlign: 'center', padding: '20px' }}>
      
      {/* جزء الشعار */}
      <img src="/Logo.png" alt="My Store Logo" style={{ width: '150px', borderRadius: '50%' }} />
      <h1>9smart</h1>
      
      {/* عرض المنتجات */}
      <div>
        {products.map(product => (
          <div key={product.slug}>
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </div>
        ))}
      </div>

      {/* قسم الروابط */}
      <div className={styles.linksSection}>
        <h2>مواقع مفيدة</h2>
        {links.map(link => (
          <div key={link.url} className={styles.linkItem}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkTitle}>
              {link.title}
            </a>
            <p>{link.description}</p>
          </div>
        ))}
      </div>

    </div> // هنا فقط نقوم بإغلاق الحاوية الرئيسية
  )
}
