import createIntl from 'next-intl/plugin';

import createMDX from './mdx-loader.js';

import withPlaiceholder from '@plaiceholder/next';

const withNextIntl = createIntl('./i18n.ts');

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [],
    // providerImportSource: '@mdx-js/react',
  },
});

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
    domains: [
      'bing.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'nextjs.oeyoewl.top',
    ],
  },
};

export default withNextIntl(withPlaiceholder(withMDX(nextConfig)));
