import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['api.lukaszkaliszewicz.pl'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json'
  }
};

export default nextConfig;
