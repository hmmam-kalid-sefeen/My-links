// هذا الكود هو الحل النهائي والأكثر استقراراً
// لا يحتاج fs، ولا path، ولا إضافات معقدة

export default async function PostPage({ params }) {
  const { slug } = await params;

  // هنا نضع المقال مباشرة في الكود لتجنب أخطاء السيرفر
  // يمكنك استبدال المحتوى أدناه بمحتوى أي مقال آخر
  const posts = {
    "ai-home-design-tools": {
      title: "AI Home Design Tools 2026",
      content: "<p>...ضع نص المقال الكامل هنا بصيغة HTML...</p>"
    }
  };

  const post = posts[slug];

  if (!post) {
    return <div>المقال غير موجود</div>;
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
