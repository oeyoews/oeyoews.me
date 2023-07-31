/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = require("./mdx-loader")();
module.exports = withMDX(nextConfig);
