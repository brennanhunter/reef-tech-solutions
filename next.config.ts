import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://clienthub.getjobber.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://googleads.g.doubleclick.net",
              "media-src 'self' data: blob:",
              "font-src 'self'",
              "frame-src 'self' https://clienthub.getjobber.com https://td.doubleclick.net",
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://analytics.google.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com"
            ].join('; ')
          }
        ]
      }
    ]
  }
};

export default nextConfig;
