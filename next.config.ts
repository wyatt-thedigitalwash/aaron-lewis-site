import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      // Old WordPress pages → new Next.js pages
      { source: '/video', destination: '/videos', permanent: true },
      { source: '/video/', destination: '/videos', permanent: true },
      { source: '/releases-archive', destination: '/music', permanent: true },
      { source: '/releases-archive/', destination: '/music', permanent: true },
      { source: '/sign-up', destination: '/', permanent: true },
      { source: '/sign-up/', destination: '/', permanent: true },
      { source: '/news', destination: '/', permanent: true },
      { source: '/news/', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true },
      { source: '/feed/', destination: '/', permanent: true },

      // Trailing slash normalization (old WP used trailing slashes)
      { source: '/tour/', destination: '/tour', permanent: true },
      { source: '/music/', destination: '/music', permanent: true },
      { source: '/videos/', destination: '/videos', permanent: true },

      // Catch-all: old blog/news posts → home
      { source: '/news/:path*', destination: '/', permanent: true },

      // Catch-all: old individual release pages → music
      { source: '/releases/:path*', destination: '/music', permanent: true },

      // WordPress infrastructure URLs (bot traffic)
      { source: '/wp-admin', destination: '/', permanent: true },
      { source: '/wp-admin/', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/xmlrpc.php', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/(.*)\\.(jpg|jpeg|png|webp|avif|ico|svg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)\\.(webmanifest|json)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
