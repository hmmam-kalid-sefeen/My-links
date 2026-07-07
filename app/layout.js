// app/layout.js
import './globals.css'; // بما أن الملف داخل app، هذا المسار صحيح
import Navbar from '../comps/navbar'; 
import Footer from '../comps/footer';
import AdBanner from '../comps/AdBanner'; // استدعاء مكون الإعلان

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* مكون الإعلان هنا ليعمل في كل الصفحات */}
     // بدلاً من حذف الكود، أضف هذا الشرط

<AdBanner />

        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
