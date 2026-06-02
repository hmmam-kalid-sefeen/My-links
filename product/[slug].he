import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>تفاصيل المنتج</h1>
      <p>أنت تشاهد الآن المنتج الخاص بـ: <strong>{slug}</strong></p>
      {/* هنا سيتم عرض البيانات لاحقاً من ملف products.json */}
    </div>
  );
}
