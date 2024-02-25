/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable the React DevTools profiler
  profiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "music.kaktusprog.ir",
        pathname: "**",
        port: "",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/track",
        destination: "/",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
