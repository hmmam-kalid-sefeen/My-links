export default function Home() {
  return (
    <div>
      {/* قسم الـ Hero */}
      <section className="hero">
        <h1>9smart</h1>
        <p>Your trusted source for technology and digital success.</p>
      </section>

      {/* قسم الإحصائيات */}
      <section className="stats">
        <div>
          <h2>500+</h2>
          <p>Tech Reviews</p>
        </div>
        <div>
          <h2>50K+</h2>
          <p>Monthly Readers</p>
        </div>
        <div>
          <h2>100+</h2>
          <p>Software Guides</p>
        </div>
      </section>

      {/* قسم الفئات */}
      <div className="categories">
        <div className="card"><h3>Tech Gadgets</h3></div>
        <div className="card"><h3>Software Tools</h3></div>
        <div className="card"><h3>Digital Marketing</h3></div>
      </div>
    </div>
  );
}
