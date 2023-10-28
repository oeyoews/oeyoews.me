const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
      {
        source: '/feed',
        destination: '/feed.xml',
      },
    ];
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    // mdxRs: true,
  },
  images: {
    domains: [
      'bing.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'nextjs.oeyoewl.top',
      'cdn.jsdelivr.net',
    ],
  },
};

module.exports = withContentlayer(nextConfig);
