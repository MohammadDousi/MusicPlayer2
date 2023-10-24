/** @type {import('next').NextConfig} */
const nextConfig = {}
// module.exports = nextConfig

module.exports = {

  reactStrictMode: true,
  // Enable the React DevTools profiler
  profiler: true,
  
    async redirects() {
      return [
        {
          source: '/track',
          destination: '/',
          permanent: false,
          basePath: false
        },
      ]
    },

  };