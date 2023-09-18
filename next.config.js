/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  publicRuntimeConfig: {
    webForm: process.env.WEB_FORM,
  },
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;
