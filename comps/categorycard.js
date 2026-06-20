export default function CategoryCard({ title, image }) {
  return (
    <div className="card" style={{ 
      padding: '0', 
      border: 'none', 
      borderRadius: '15px', 
      overflow: 'hidden', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
    }}>
      {/* التعديل هنا: نتحقق من وجود image قبل العرض */}
      {image ? (
        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
        />
      ) : (
        <div style={{ width: '100%', height: '150px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>No Image</span>
        </div>
      )}
      <h3 style={{ padding: '15px', margin: '0' }}>{title}</h3>
    </div>
  );
}
