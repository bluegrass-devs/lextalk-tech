/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/lextalk-tech",
  images: {
    domains: ["placekitten.com", "res.cloudinary.com"],
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
