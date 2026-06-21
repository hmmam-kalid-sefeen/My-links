import fs from 'fs';
import path from 'path';

export default async function PostPage({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.json`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const post = JSON.parse(fileContents);

    return (
      <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif' }}>
        {/* العنوان */}
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#111' }}>{post.title}</h1>
        
        {/* التصنيف بالإنجليزية */}
        <p style={{ color: '#555', fontWeight: 'bold', marginBottom: '30px' }}>
          Category: <span style={{ color: '#0070f3' }}>{post.category}</span>
        </p>

        {/* محتوى المقالة مع تنسيق المسافات بين الفقرات */}
        <div style={{ 
          marginTop: '20px', 
          lineHeight: '1.8', 
          fontSize: '1.1rem', 
          color: '#333' 
        }}>
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '20px' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>404 - Article Not Found</h1>
      </main>
    );
  }
}
