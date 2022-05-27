/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }, 
   compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}

module.exports = nextConfig
