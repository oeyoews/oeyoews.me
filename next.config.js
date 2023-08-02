const createMDX = require('@next/mdx');
const { remarkCodeHike } = require('@code-hike/mdx');

const codeOptions = {
  lineNumbers: true,
  showCopyButton: true,
  theme: 'one-dark-pro',
  staticMediaQuery: 'not screen, (max-width: 768px)',
  autoImport: true,
  autoLink: false,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, codeOptions]],
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
