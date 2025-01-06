import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "4kwallpapers.com" },
      { protocol: "https", hostname: "images.ctfassets.net" },
    ],
  },
};

export default nextConfig;
