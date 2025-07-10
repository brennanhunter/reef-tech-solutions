import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ReefTech Solutions - Smart Home Integration Hawaii | Vacation Rental Automation",
  description: "Professional smart home integration and automation services for Hawaii vacation rentals and luxury properties. Specializing in smart locks, pool automation, security systems, and sauna maintenance on Big Island.",
  keywords: [
    "smart home Hawaii",
    "vacation rental automation",
    "Big Island electrical",
    "smart locks Hawaii",
    "pool automation",
    "sauna maintenance Hawaii",
    "property management technology",
    "Kona smart home",
    "vacation rental tech",
    "home automation Hawaii"
  ],
  authors: [{ name: "ReefTech Solutions" }],
  creator: "ReefTech Solutions",
  publisher: "ReefTech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reeftechsolutions.com'), // Update with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ReefTech Solutions - Smart Home Integration Hawaii",
    description: "Professional smart home integration and automation services for Hawaii vacation rentals and luxury properties.",
    url: 'https://reeftechsolutions.com',
    siteName: 'ReefTech Solutions',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'ReefTech Solutions - Smart Home Integration Hawaii',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ReefTech Solutions - Smart Home Integration Hawaii",
    description: "Professional smart home integration and automation services for Hawaii vacation rentals and luxury properties.",
    images: ['/og-image.jpg'], // Same image as OG
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add when you get Google Search Console set up
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
  classification: 'Smart Home Integration Services',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0077BE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ReefTech Solutions" />
        
        {/* Geo-targeting for Hawaii */}
        <meta name="geo.region" content="US-HI" />
        <meta name="geo.placename" content="Big Island, Hawaii" />
        <meta name="geo.position" content="19.8968;-155.5828" />
        <meta name="ICBM" content="19.8968, -155.5828" />
        
        {/* Business specific */}
        <meta name="rating" content="5" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="property managers, vacation rental owners, homeowners" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ReefTech Solutions",
              "image": "https://reeftechsolutions.com/logo.jpg",
              "description": "Professional smart home integration and automation services for Hawaii vacation rentals and luxury properties.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kailua-Kona",
                "addressRegion": "HI",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.8968,
                "longitude": -155.5828
              },
              "url": "https://reeftechsolutions.com",
              "telephone": "+1-808-303-4627",
              "priceRange": "$$",
              "openingHours": "Mo-Sa 08:00-18:00",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 19.8968,
                  "longitude": -155.5828
                },
                "geoRadius": "100000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Smart Home Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Smart Home Integration",
                      "description": "Complete home automation systems with app control and voice integration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Vacation Rental Automation",
                      "description": "Smart locks, automated check-in systems, and remote monitoring for vacation rentals"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pool & Spa Automation",
                      "description": "Smart pH monitoring, automated chemical systems, and app-controlled pool equipment"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sauna & Spa Maintenance",
                      "description": "Specialized sauna repair and smart spa systems - only specialist on Big Island"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.yelp.com/biz/your-yelp-page"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "25"
              }
            })
          }}
        />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}