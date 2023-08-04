// const createMDX = require('@next/mdx');
const createMDX = require('./mdx-loader.js');

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [],
    // providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
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
    mdxRs: true,
  },
  images: {
    domains: ['bing.com', 'images.unsplash.com', 'plus.unsplash.com'],
  },
};

module.exports = withMDX(nextConfig);
