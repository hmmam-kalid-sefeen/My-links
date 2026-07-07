import './globals.css'; 
import Navbar from '../comps/navbar'; 
import Footer from '../comps/footer';
// اترك سطر الاستيراد معلقاً هكذا
import AdBanner from '../comps/AdBanner'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* تعليق المكون يضمن أنه لن يتم استدعاؤه في الصفحة */}
        {/* <AdBanner /> */}
         <AdBanner/>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
