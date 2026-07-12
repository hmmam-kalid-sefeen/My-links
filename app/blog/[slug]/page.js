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

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data) return <div>Article not found</div>;

  const lines = (data.content || "").split('\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{data.title}</h1>
      {data.image && <img src={data.image} alt={data.title} style={{ width: '100%', borderRadius: '15px' }} />}
      
      <div style={{ marginTop: '20px', lineHeight: '1.8' }}>
        {lines.map((line, index) => {
          // 1. اكتشاف سطر الجدول
          if (line.trim().startsWith('|')) {
            const cells = line.split('|').filter(c => c.trim() !== '');
            return (
              <table key={index} style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
                <tr>
                  {cells.map((cell, i) => <td key={i} style={{ border: '1px solid #ccc', padding: '8px' }}>{cell.trim()}</td>)}
                </tr>
              </table>
            );
          }

          // 2. اكتشاف العناوين
          if (line.startsWith('### ')) return <h3 key={index}>{line.replace('### ', '')}</h3>;
          if (line.startsWith('## ')) return <h2 key={index}>{line.replace('## ', '')}</h2>;

          // 3. الفقرات العادية
          return line.trim() ? <p key={index}>{line}</p> : null;
        })}
      </div>
    </article>
  );
}
