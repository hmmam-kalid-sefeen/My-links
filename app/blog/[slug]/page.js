import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default async function PostPage({ params }) {
  // الحصول على الـ slug من الرابط
  const { slug } = await params;
  
  // قراءة ملف الـ JSON الخاص بالمقالة
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const post = JSON.parse(fileContents);

    return (
      <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto', lineHeight: '1.6' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{post.title}</h1>
        <p style={{ color: '#0070f3', fontWeight: 'bold' }}>Category: {post.category}</p>
        
        <div style={{ marginTop: '30px' }}>
          {/* تحويل الماركدون إلى HTML */}
          <ReactMarkdown 
            components={{
              h1: ({node, ...props}) => <h1 style={{ fontSize: '2rem', marginTop: '20px' }} {...props} />,
              h2: ({node, ...props}) => <h2 style={{ fontSize: '1.75rem', marginTop: '20px' }} {...props} />,
              h3: ({node, ...props}) => <h3 style={{ fontSize: '1.5rem', marginTop: '15px' }} {...props} />,
              ul: ({node, ...props}) => <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} {...props} />,
              ol: ({node, ...props}) => <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }} {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </main>
    );
  } catch (error) {
    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>404 - Article Not Found</h1>;
  }
}
