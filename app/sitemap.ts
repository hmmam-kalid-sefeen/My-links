import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.9smart.buzz',
      lastModified: new Date(),
    },
    {
      url: 'https://www.9smart.buzz/blog/smart-glasses',
      lastModified: new Date(),
    },
    {
      url: 'https://www.9smart.buzz/blog/ai-for-fast-video-editing',
      lastModified: new Date(),
    },
  ]
}
