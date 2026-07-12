import fs from 'fs';
import path from 'path';

// ... دالة getPostData و renderTextWithLinks كما هي ...

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const data = await getPostData(slug);
  if (!data) return <div>Article not found</div>;

  const lines = (data.content || "").split('\n');

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{data.title}</h1>
      <div style={{ marginTop: '20px' }}>
        {(() => {
          let elements = [];
          let tableRows = [];

          for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();

            // إذا كان السطر جزءاً من جدول
            if (line.startsWith('|')) {
              // تجاهل سطر التنسيق (---)
              if (!line.includes('---')) {
                tableRows.push(line.split('|').filter(c => c.trim() !== ''));
              }
              // إذا كان هذا آخر سطر في الملف أو السطر التالي ليس جدولاً، اغلق الجدول
              if (i === lines.length - 1 || !lines[i + 1].trim().startsWith('|')) {
                elements.push(
                  <table key={i} style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <tbody>
                      {tableRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} style={{ border: '1px solid #ccc', padding: '10px' }}>
                              {renderTextWithLinks(cell.trim())}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
                tableRows = [];
              }
            } else {
              // إذا لم يكن جدولاً، اعرض النص العادي
              if (line.startsWith('### ')) elements.push(<h3 key={i}>{renderTextWithLinks(line.replace('### ', ''))}</h3>);
              else if (line.startsWith('## ')) elements.push(<h2 key={i}>{renderTextWithLinks(line.replace('## ', ''))}</h2>);
              else if (line) elements.push(<p key={i}>{renderTextWithLinks(line)}</p>);
            }
          }
          return elements;
        })()}
      </div>
    </article>
  );
}
