// app/sitemap.ts
import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const baseUrl = 'https://www.9smart.buzz'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const postEntries: MetadataRoute.Sitemap = []

  for (const filename of filenames) {
    if (!filename.endsWith('.json')) continue

    try {
      const filePath = path.join(postsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const post = JSON.parse(fileContent)

      if (!post.slug) {
        console.warn(`⚠️ ${filename} لا يحتوي على حقل slug — تم تخطيه`)
        continue
      }

      postEntries.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    } catch (error) {
      console.error(`❌ فشل تحليل الملف: ${filename}`, error)
    }
  }

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
  ]

  return [...staticPages, ...postEntries]
}
