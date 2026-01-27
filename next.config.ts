import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    unoptimized: true, // Required for static export if not using a cloud loader
  },
  output: 'export', // Enforce static export
  trailingSlash: true, // Optional: helpful for static hosting
};

export default nextConfig;
