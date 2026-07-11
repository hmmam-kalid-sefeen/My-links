import './globals.css'; 
import Navbar from '../comps/navbar'; 
import Footer from '../comps/footer';
import AdBanner from '../comps/AdBanner'; 

// Updated metadata for an English website
export const metadata = {
  title: '9SMART | Future Tech & AI Solutions',
  description: 'Explore the latest AI innovations, home design tools, and smart technology solutions with 9SMART.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Navbar />
        <AdBanner />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
