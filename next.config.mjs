import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      '#site/content': path.resolve(__dirname, '.velite'),
    };
    return config;
  },
};

export default nextConfig;
