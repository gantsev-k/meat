import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // ⬅️ Ключевая строка!
  
  // Для GitHub Pages отключаем оптимизацию изображений
  images: {
    unoptimized: true, // ⬅️ Обязательно для статического хостинга
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  
  // Для правильных путей в GitHub Pages
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;