import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   webpack: (config, { isServer }) => {
    if (!isServer) {
      // On the client side, prevent inclusion of these Node modules
      config.resolve.fallback = {
        fs: false,
        path: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
      };
    }
    return config;
  },
};

export default nextConfig;
