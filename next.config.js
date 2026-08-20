/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
        pathname: "/res/**",
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
  },
};

module.exports = nextConfig;
