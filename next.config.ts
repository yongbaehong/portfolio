/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Required for Static Site Generation (SSG)
  basePath: isProd ? '/yongbaehong.github.io' : '', // Replace with your repository name
  assetPrefix: isProd ? '/yongbaehong.github.io/' : '', // Ensures CSS/JS load correctly
  images: {
    unoptimized: true, // GitHub Pages doesn't support the default Next.js Image Optimization
  },
};

export default nextConfig;