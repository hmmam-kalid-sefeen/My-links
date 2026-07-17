import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent); // نفترض أن ملفاتك بصيغة JSON
    return { title: data.title, url: `/posts/${filename.replace('.json', '')}` };
  });

  return NextResponse.json(posts);
}
