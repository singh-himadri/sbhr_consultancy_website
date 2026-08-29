import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: "export",
  basePath: "/sbhr_consultancy_website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
