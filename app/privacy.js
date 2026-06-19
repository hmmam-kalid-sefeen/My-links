import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '50px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. We do not collect personal data without your consent.</p>
      </main>
      <Footer />
    </>
  );
}
