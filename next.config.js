/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '**.com',
      },
    ],
  },
}

module.exports = nextConfig
