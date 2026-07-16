import './globals.css'; 
import Navbar from '../comps/navbar'; 
import Footer from '../comps/footer';
import AdBanner from '../comps/AdBanner'; 
import Script from 'next/script'; // استيراد مكتبة Script من Next.js

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
        url: 'https://www.9smart.buzz/og-image.jpg',
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
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W6T1YTG6Z1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6T1YTG6Z1');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <AdBanner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
