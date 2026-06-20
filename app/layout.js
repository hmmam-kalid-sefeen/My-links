// app/layout.js
import './globals.css'; // بما أن الملف أصبح الآن داخل app، هذا المسار صحيح
import Navbar from '../comps/navbar'; 
import Footer from '../comps/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
