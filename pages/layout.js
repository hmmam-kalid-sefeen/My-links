import Navbar from '../components/navbar'; // تأكد من المسار الصحيح لملف القائمة

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header>
          <Navbar /> 
        </header>
        <main style={{ marginTop: '80px' }}> {/* إضافة مسافة لتجنب تغطية المحتوى بواسطة القائمة الثابتة */}
          {children}
        </main>
      </body>
    </html>
  );
}
