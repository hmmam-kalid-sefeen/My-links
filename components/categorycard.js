export default function CategoryCard({ title, icon }) {
  return (
    <div className="card" style={{ padding: '30px', border: '1px solid #eee', borderRadius: '15px', textAlign: 'center' }}>
      <div>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}
