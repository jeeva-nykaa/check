/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import "./src/libs/Env.mjs";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer({
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  reactStrictMode: false,
  images: {
    domains: ["cloudflare-ipfs.com"], // Add your image domains here
  },
  webpack: (config) => {
    // config.externals is needed to resolve the following errors:
    // Module not found: Can't resolve 'bufferutil'
    // Module not found: Can't resolve 'utf-8-validate'
    config.externals.push({
      bufferutil: "bufferutil",
      sharp: "commonjs sharp",
      "utf-8-validate": "utf-8-validate",
    });

    return config;
  },
});
