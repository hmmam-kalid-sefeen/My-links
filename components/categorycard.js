export default function CategoryCard({ title, icon }) {
  return (
    <div className="card" style={{ padding: '30px', border: '1px solid #eee', borderRadius: '15px', textAlign: 'center' }}>
      {/* استخدمنا icon بدلاً من image */}
      <img src={icon || '/default-placeholder.jpg'} alt={title} style={{ width: '50px', height: '50px' }} />
      <h3>{title}</h3>
    </div>
  );
}
