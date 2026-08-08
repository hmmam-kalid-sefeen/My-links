import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts' // دالتك لجلب المقالات

const baseUrl = 'https://www.9smart.buzz'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
  ]

  return [...staticPages, ...postEntries]
}
