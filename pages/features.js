import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Features() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '50px', textAlign: 'center' }}>
        <h1>المميزات (Features)</h1>
        <p>هنا يمكنك إضافة قائمة بمميزات أدوات التقنية والبرمجيات التي تتحدث عنها.</p>
        {/* يمكنك إضافة مكونات أخرى هنا */}
      </main>
      <Footer />
    </>
  );
}
