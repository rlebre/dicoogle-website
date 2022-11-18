/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'ruilebre.com'],
    loader: "default",
  },
}


module.exports = nextConfig
