/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 768, 1024, 1280, 1600],
    imageSizes: [64, 128, 256]
  }
};

export default nextConfig;
