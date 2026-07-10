// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://9smart.buzz',
      lastModified: new Date(),
    },
    {
      url: 'https://9smart.buzz/blog/smart-glasses',
      lastModified: new Date(),
    },
    {
      url: 'https://9smart.buzz/blog/how-to-use-ai-for-fast-video-editing',
      lastModified: new Date(),
    },
    // يمكنك إضافة أي عدد من المقالات هنا أو عمل map لملفاتك
  ]
}
