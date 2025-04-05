/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Enable static exports for Netlify deployment
  output: 'export',
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Disable trailing slashes in URLs
  trailingSlash: false,
};

module.exports = nextConfig;
