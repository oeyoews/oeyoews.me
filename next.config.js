const createMDX = require('@next/mdx');
const { remarkCodeHike } = require('@code-hike/mdx');

const codeOptions = {
  lineNumbers: false, // not work ???
  showCopyButton: false,
  theme: 'one-dark-pro',
  staticMediaQuery: 'not screen, (max-width: 768px)',
  autoImport: true,
  autoLink: false, // not support nextjs 13 app router or server component
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
