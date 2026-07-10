/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // هذا السطر سيتجاهل أخطاء الـ TypeScript أثناء عملية البناء
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
