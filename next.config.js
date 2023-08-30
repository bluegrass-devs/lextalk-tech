/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  images: {
    domains: ["placekitten.com", "res.cloudinary.com"],
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;