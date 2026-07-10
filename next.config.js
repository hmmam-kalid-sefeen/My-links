/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // هذا السطر يخبر Vercel بتجاهل أخطاء TypeScript أثناء البناء
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
