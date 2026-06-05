import products from '../../products.json'; 


export default function ProductPage({ product }) {
  if (!product) return <h1> product not found</h1>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <p>{product.description}</p>
      <a href={product.affiliateLink} style={{ display: 'block', background: 'blue', color: 'white', padding: '10px', textAlign: 'center' }}>
        Buy Here
      </a>
    </div>
  );
}

// هذه الدالة تخبر Next.js كيف يجد المنتج بناءً على الرابط
export async function getServerSideProps(context) {
  const { slug } = context.query;
  const product = products.find((p) => p.slug === slug);
  return { props: { product: product || null } };
}
