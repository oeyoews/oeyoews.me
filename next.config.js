const createMDX = require('@next/mdx');

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['bing.com'],
  },
};

module.exports = withMDX(nextConfig);
