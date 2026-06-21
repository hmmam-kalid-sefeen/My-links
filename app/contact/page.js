// app/contact/page.js
export default function ContactPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>اتصل بنا</h1>
      <form action="/api/contact" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" name="name" placeholder="الاسم" required style={inputStyle} />
        <input type="email" name="email" placeholder="البريد الإلكتروني" required style={inputStyle} />
        <textarea name="message" placeholder="رسالتك" rows="5" required style={inputStyle}></textarea>
        <button type="submit" style={buttonStyle}>إرسال</button>
      </form>
    </div>
  );
}

// تنسيقات بسيطة
const inputStyle = { padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' };
const buttonStyle = { padding: '10px', background: '#1e3a8a', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };
