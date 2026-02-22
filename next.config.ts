import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "indianewshindi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thehirex.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
