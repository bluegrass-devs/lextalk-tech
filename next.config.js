// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // basePath: "https://nealium104.github.io/lextalk-tech/",
//   images: {
//     domains: ["placekitten.com", "res.cloudinary.com"],
//     unoptimized: true,
//   },
//   output: "export",
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:
    process.env.PRODUCTION === "true"
      ? "https://mywebsite.com/"
      : "/lextalk-tech/",
  images: {
    domains: ["placekitten.com", "res.cloudinary.com"],
    unoptimized: process.env.PRODUCTION !== "true",
  },
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
