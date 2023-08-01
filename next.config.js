/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    domains: ["bing.com"],
  },
};

const withMDX = require("./mdx-loader")();
module.exports = withMDX(nextConfig);
