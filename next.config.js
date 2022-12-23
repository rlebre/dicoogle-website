/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'ruilebre.com', 'dicoogle.com'],
    loader: 'default'
  }
};

module.exports = nextConfig;
