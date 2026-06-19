// app/layout.js
../components
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main style={{ marginTop: '80px' }}>
          {children} {/* هنا ستظهر كل صفحاتك تلقائياً */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
