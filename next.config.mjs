/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ApexBuilder-manual',
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
};

export default nextConfig;
