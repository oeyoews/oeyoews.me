import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import createMDX from "./mdx-loader.js";
// import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    domains: ["bing.com"],
  },
};

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkEmoji, remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
