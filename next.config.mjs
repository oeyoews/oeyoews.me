import createMDX from './mdx-loader.js';

// import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  pageExtensions: ['ts', 'tsx', 'mdx', 'md'],
  images: {
    domains: ['bing.com'],
  },
};

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    // remarkPlugins: [remarkEmoji, remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
