/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/homebuilder-website',
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
};

export default nextConfig;
