// app/sitemap.ts
import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const baseUrl = 'https://www.9smart.buzz'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const postEntries: MetadataRoute.Sitemap = filenames
    .filter((filename) => filename.endsWith('.json'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const post = JSON.parse(fileContent)

      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }
    })

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
  ]

  return [...staticPages, ...postEntries]
}
