// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend-shohanur-1.onrender.com",
      },
    ],
  },
};

export default nextConfig;
