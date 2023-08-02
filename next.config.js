// const createMDX = require('@next/mdx');
const createMDX = require('./mdx-loader.js');

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
    domains: ['bing.com', 'images.unsplash.com', 'plus.unsplash.com'],
  },
};

module.exports = withMDX(nextConfig);
