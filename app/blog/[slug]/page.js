// app/blog/[slug]/page.js

// وظيفة لجلب البيانات من الرابط العام
async function getPostData(slug) {
  try {
    const res = await fetch(`https://www.9smart.buzz/posts/${slug}.json`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);
  
  if (!data) return { title: "Page Not Found" };

  return {
    title: data.title, // عنوان فريد
    description: data.description, // وصف دقيق
    alternates: {
      canonical: data.canonical, // ربط الـ canonical لمنع تكرار المحتوى
    },
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.image],
    }
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) {
    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Article not found</h1>;
  }

  // معالجة المحتوى لتحويله إلى HTML
  const content = data.content || "";
  const formattedContent = content
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim, '<a href="$2" style="color:#2563eb; text-decoration:underline; font-weight:bold;" target="_blank" rel="nofollow">$1</a>')
    .replace(/^### (.*$)/gim, '<h3 style="margin-top:20px; font-weight:bold;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="margin-top:25px; font-weight:bold;">$1</h2>')
    .replace(/\*\*(.*)\*\*/gim, '<strong style="font-weight:bold;">$1</strong>')
    .replace(/\n/g, '<br />');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.8' }}>
      <h1>{data.title}</h1>
      {data.image && <img src={data.image} alt={data.imageAlt || data.title} style={{ width: '100%', borderRadius: '15px' }} />}
      
      <div dangerouslySetInnerHTML={{ __html: formattedContent }} />

      <hr style={{ margin: '40px 0' }} />
      <p style={{ fontSize: '0.8rem', color: '#777', textAlign: 'center' }}>
        Disclosure: This article contains affiliate links. Read our <a href="/terms">Terms of Service</a>.
      </p>
    </article>
  );
}
