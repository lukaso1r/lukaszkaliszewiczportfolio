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
  },
  async redirects() {
    return [
      {
        source: '/projekty/lukaszkaliszewcz.pl',
        destination: '/',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
