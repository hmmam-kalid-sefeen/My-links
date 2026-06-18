import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '80px 20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out at: <strong>info@9smart.buzz</strong></p>
      </main>
      <Footer />
    </>
  );
}
