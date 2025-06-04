import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'framerusercontent.com',
      // Add any other domains you need
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
