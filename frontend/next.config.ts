import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves the site from /<repo>/, not the domain root.
  // Set NEXT_PUBLIC_BASE_PATH=/<repo-name> when building for Pages
  // (the CI workflow does this automatically). Empty when hosting at root.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    // Custom loader so basePath is applied to <Image> srcs in the static
    // export (unoptimized mode would skip basePath entirely).
    loader: "custom",
    loaderFile: "./images-loader.js",
  },
};

export default nextConfig;