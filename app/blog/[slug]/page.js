import { posts } from '@/postsData';

export default async function PostPage({ params }) {
  // الحصول على الـ slug من الرابط
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // جلب المقال من ملف البيانات
  const post = posts[slug];

  if (!post) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontSize: '1.2rem' }}>
        المقال غير موجود. تأكد من الرابط أو اسم المقال.
      </div>
    );
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>{post.title}</h1>
      
      {/* عرض محتوى المقال المنسق بالـ HTML */}
      <div 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
}
