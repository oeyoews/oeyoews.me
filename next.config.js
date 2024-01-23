/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: false,
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/blog',
      //   permanent: true,
      // },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**'
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  experimental: {
    ppr: false
  }
};

module.exports = nextConfig;
