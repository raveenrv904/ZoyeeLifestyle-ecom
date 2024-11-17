import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.imgur.com", "placeimg.com"], // Add allowed image domain here
  },
};

export default nextConfig;
