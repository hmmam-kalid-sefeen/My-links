// هذا الكود يوضع في ملف Footer.js أو في الجزء السفلي من Layout.js
export default function Footer() {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #ccc', marginTop: '40px' }}>
      <p>&copy; 2026 9SMART. All Rights Reserved</p>
      <nav style={{ marginTop: '10px' }}>
        <a href="/privacy" style={{ margin: '0 10px' }}>Privacy Policy</a>
        <a href="/terms" style={{ margin: '0 10px' }}>Terms of Service</a>
      </nav>
    </footer>
  );
}
