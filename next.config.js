/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // هذا السطر يخبر Vercel بتجاهل أخطاء TypeScript أثناء البناء
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
