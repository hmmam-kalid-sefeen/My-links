export default function ContactPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Contact Us</h1>
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
        <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
        <textarea name="message" placeholder="Your Message" rows="5" required style={inputStyle}></textarea>
        
        {/* أضف هذا السطر تحديداً في الأسفل قبل زر الإرسال */}
        <input type="hidden" name="_next" value="https://9smart.buzz/thank" />
        
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px' };
const buttonStyle = { padding: '10px 20px', background: '#1e3a8a', color: 'white', border: 'none', cursor: 'pointer' };
