/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: false,
  // i18n: {
  //   locales: ['en', 'zh'],
  //   defaultLocale: 'zh',
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tiddlers',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    ppr: true,
    // optimizePackageImports: ['react-icons'],
  },
};

module.exports = nextConfig;
