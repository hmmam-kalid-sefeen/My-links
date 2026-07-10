import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://your-domain.com', // ضع رابط موقعك هنا
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
