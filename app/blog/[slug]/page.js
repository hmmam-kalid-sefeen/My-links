export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div>Article not found</div>;

  const content = data.content || "";

  // 1. معالجة العناوين أولاً (لأنها تأتي في بداية السطر)
  // 2. تقسيم النص إلى فقرات
  // 3. تطبيق باقي التنسيقات (روابط، بولد)
  const htmlContent = content
    .split('\n\n') 
    .map((block) => {
      let processed = block.trim();

      // التحقق من العناوين
      if (processed.startsWith('## ')) {
        return `<h2 style="margin-top:25px; font-weight:bold;">${processed.replace('## ', '')}</h2>`;
      }
      if (processed.startsWith('### ')) {
        return `<h3 style="margin-top:20px; font-weight:bold;">${processed.replace('### ', '')}</h3>`;
      }

      // معالجة الروابط والنصوص العريضة داخل الفقرة
      processed = processed
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim, '<a href="$2" style="color:#2563eb; text-decoration:underline;" target="_blank" rel="nofollow">$1</a>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');

      return `<p style="margin-bottom: 20px; line-height: 1.8;">${processed}</p>`;
    })
    .join('');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{data.title}</h1>
      {/* ... باقي الكود كما هو ... */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}
