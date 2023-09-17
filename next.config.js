/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  publicRuntimeConfig: {
    webForm: process.env.WEB_FORM,
  },
};

module.exports = nextConfig;
