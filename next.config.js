/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 🔥 disables server-dependent image optimization
  },
}

module.exports = nextConfig

