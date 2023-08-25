const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.module.rules.push({
      test: /\.mp3$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    });
    // Important: return the modified config
    return config;
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    // mdxRs: true,
    serverActions: true,
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
