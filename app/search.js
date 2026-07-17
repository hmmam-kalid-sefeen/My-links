// app/search/page.js
export default function SearchPage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: '20px' }}>البحث في 9SMART</h1>
      <input 
        type="text" 
        placeholder="عن ماذا تبحث؟" 
        style={{ 
          padding: '10px', 
          width: '80%', 
          maxWidth: '400px', 
          borderRadius: '5px', 
          border: '1px solid #ccc' 
        }}
      />
      <button style={{ 
        padding: '10px 20px', 
        marginLeft: '10px', 
        backgroundColor: '#1e3a8a', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        بحث
      </button>
    </div>
  );
}
