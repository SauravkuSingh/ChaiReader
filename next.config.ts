import type { NextConfig } from "next";

/**
 * Static-export config.
 *
 * The app is exported to plain HTML/CSS/JS so it can be dropped into a
 * Capacitor `webDir` and shipped to Android/iOS without a Node server.
 * That constraint is why we avoid server-only features (server actions,
 * request-time rendering, the default Image Optimization API).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // No server at runtime under Capacitor -> optimization API is unavailable.
    unoptimized: true,
  },
  // Emit `/route/index.html` so static hosts and the Capacitor file server
  // resolve nested routes without a rewrite layer.
  trailingSlash: true,
};

export default nextConfig;
