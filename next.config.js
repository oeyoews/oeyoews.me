/** @type {import('next').NextConfig} */
const nextConfig = {
  // cacheComponents: true,
  compiler: {
    // removeConsole: process.env.NODE_ENV === 'production'
    removeConsole: {
      exclude: ['error']
    }
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/s/tskpl',
        destination: 'https://neotw.vercel.app/docs',
      },
      {
        source: '/s/oeyoews',
        destination: 'https://github.com/oeyoews',
        // permanent: false,
      },
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
