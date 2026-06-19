import Navbar from './navbar';

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px' }}>
        {children}
      </main>
    </>
  );
}
