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
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://clienthub.getjobber.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
              "media-src 'self' data: blob:",
              "font-src 'self'",
              "frame-src 'self' https://clienthub.getjobber.com",
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com"
            ].join('; ')
          }
        ]
      }
    ]
  }
};

export default nextConfig;
