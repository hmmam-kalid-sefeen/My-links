import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. تحديد مسار مجلد المقالات
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  // 2. استخراج الروابط من الملفات
  const posts = filenames.map((filename) => {
    const slug = filename.replace('.json', ''); // نفترض أن اسم الملف هو السلاج
    return {
      url: `https://9smart.buzz/blog/${slug}`,
      lastModified: new Date(),
    };
  });

  // 3. إرجاع القائمة كاملة (الرئيسية + المقالات)
  return [
    {
      url: 'https://9smart.buzz',
      lastModified: new Date(),
    },
    ...posts,
  ];
}
