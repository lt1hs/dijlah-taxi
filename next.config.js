/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  },
  // Add static page configuration
  staticPageGenerationTimeout: 1000,
  generateBuildId: () => 'build',
}

module.exports = nextConfig