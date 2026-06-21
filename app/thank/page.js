export default function ThankYouPage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '60vh', 
      textAlign: 'center',
      padding: '20px' 
    }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '2.5rem' }}>Thank You!</h1>
      <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
        Your message has been sent successfully. We will get back to you soon.
      </p>
      <a href="/" style={{ 
        padding: '10px 25px', 
        background: '#1e3a8a', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '5px' 
      }}>
        Back to Home
      </a>
    </div>
  );
}
