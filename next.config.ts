import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextIntlPlugin = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/2025",
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

export default nextIntlPlugin(nextConfig);
