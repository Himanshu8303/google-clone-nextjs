/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["upload.wikimedia.org"],
  },
  //    images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'upload.wikimedia.org',
  //     },
  //   ],
  // }, 
};
module.exports = nextConfig;

