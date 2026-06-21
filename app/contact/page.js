export default function ContactPage() {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
      <h1>Contact Us</h1>
      {/* ضع الرابط الذي نسخته هنا بدلاً من الرابط الوهمي */}
      <form action="https://formspree.io/f/mzdkjjyk" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" name="name" placeholder="Your Name" required style={{ padding: '10px' }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ padding: '10px' }} />
        <textarea name="message" placeholder="Your Message" rows="5" required style={{ padding: '10px' }}></textarea>
        <button type="submit" style={{ padding: '10px', background: '#1e3a8a', color: 'white', border: 'none', cursor: 'pointer' }}>Send</button>
      </form>
    </div>
  );
}
