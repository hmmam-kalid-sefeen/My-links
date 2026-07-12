import fs from 'fs';
import path from 'path';

async function getPostData(slug) {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    return null;
  }
}

// دالة مساعدة لتحويل النصوص التي تحتوي على روابط [text](url) إلى وسوم <a>
const renderTextWithLinks = (text) => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>{match[1]}</a>;
    }
    return part;
  });
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div>Article not found</div>;

  const lines = (data.content || "").split('\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.8' }}>
      <h1>{data.title}</h1>
      {data.image && <img src={data.image} alt={data.title} style={{ width: '100%', borderRadius: '15px' }} />}
      
      <div style={{ marginTop: '20px' }}>
        {lines.map((line, index) => {
          const trimmedLine = line.trim();
          
          // 1. معالجة الجداول
          if (trimmedLine.startsWith('|')) {
            const cells = trimmedLine.split('|').filter(c => c.trim() !== '');
            return (
              <table key={index} style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
                <tbody>
                  <tr>
                    {cells.map((cell, i) => <td key={i} style={{ border: '1px solid #ccc', padding: '8px' }}>{renderTextWithLinks(cell.trim())}</td>)}
                  </tr>
                </tbody>
              </table>
            );
          }

          // 2. معالجة العناوين (مع دعم الروابط داخلها)
          if (trimmedLine.startsWith('### ')) {
            return <h3 key={index} style={{ marginTop: '20px' }}>{renderTextWithLinks(trimmedLine.replace('### ', ''))}</h3>;
          }
          if (trimmedLine.startsWith('## ')) {
            return <h2 key={index} style={{ marginTop: '30px' }}>{renderTextWithLinks(trimmedLine.replace('## ', ''))}</h2>;
          }

          // 3. معالجة الفقرات العادية (مع دعم الروابط)
          return trimmedLine ? <p key={index} style={{ marginBottom: '15px' }}>{renderTextWithLinks(trimmedLine)}</p> : null;
        })}
      </div>
    </article>
  );
}
