/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 👈 this enables static export
  images: {
    unoptimized: true // needed because Next image optimization needs a server
  }
}

module.exports = nextConfig
