import fs from 'fs';
import path from 'path';

// 1. دالة جلب البيانات من ملفات الـ JSON
async function getPostData(slug) {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    return null;
  }
}

// 2. دالة مساعدة لتحويل الروابط [text](url) إلى وسوم <a>
const renderTextWithLinks = (text) => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return (
        <a 
          key={i} 
          href={match[2]} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#2563eb', textDecoration: 'underline' }}
        >
          {match[1]}
        </a>
      );
    }
    return part;
  });
};

// 3. المكون الرئيسي للصفحة
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div style={{ padding: '50px', textAlign: 'center' }}>Article not found</div>;

  const lines = (data.content || "").split('\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.8' }}>
      <h1>{data.title}</h1>
      {data.image && (
        <img 
          src={data.image} 
          alt={data.imageAlt || data.title} 
          style={{ width: '100%', borderRadius: '15px', marginTop: '20px' }} 
        />
      )}
      
      <div style={{ marginTop: '30px' }}>
        {lines.map((line, index) => {
          const trimmedLine = line.trim();
          
          // - معالجة الجداول (أي سطر يبدأ بـ |)
          if (trimmedLine.startsWith('|')) {
            const cells = trimmedLine.split('|').filter(c => c.trim() !== '');
            return (
              <table key={index}>
                <tbody>
                  <tr>
                    {cells.map((cell, i) => (
                      <td key={i}>{renderTextWithLinks(cell.trim())}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            );
          }

          // - معالجة العناوين (H2, H3)
          if (trimmedLine.startsWith('### ')) {
            return <h3 key={index} style={{ marginTop: '25px' }}>{renderTextWithLinks(trimmedLine.replace('### ', ''))}</h3>;
          }
          if (trimmedLine.startsWith('## ')) {
            return <h2 key={index} style={{ marginTop: '35px' }}>{renderTextWithLinks(trimmedLine.replace('## ', ''))}</h2>;
          }

          // - معالجة الفقرات العادية
          return trimmedLine ? (
            <p key={index} style={{ marginBottom: '15px' }}>{renderTextWithLinks(trimmedLine)}</p>
          ) : null;
        })}
      </div>
    </article>
  );
}
