// app/layout.js
import './globals.css'; 
import Navbar from '../comps/navbar'; 
import Footer from '../comps/footer';
import AdBanner from '../comps/AdBanner'; 

export const metadata = {
  title: '9SMART | Future Tech & AI Solutions',
  description: 'Explore the latest AI innovations, home design tools, and smart technology solutions with 9SMART. Stay ahead with our expert tech guides and reviews.',
  openGraph: {
    title: '9SMART | Future Tech & AI Solutions',
    description: 'Explore the latest AI innovations, home design tools, and smart technology solutions with 9SMART.',
    url: 'https://www.9smart.buzz',
    siteName: '9SMART',
    images: [
      {
        url: 'https://www.9smart.buzz/og-image.jpg', // تأكد من وضع صورة في مجلد public
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Navbar />
        <AdBanner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
