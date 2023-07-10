/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      source: '/',
      destination: '/signin',
      permanent: true,
    ],
  }
}

module.exports = nextConfig
