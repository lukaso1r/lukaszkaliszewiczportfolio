import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['api.lukaszkaliszewicz.pl'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
