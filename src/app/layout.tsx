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
  title: {
    default: "ReefTech Solutions - Your Property's Complete Tech Department | Hawaii Smart Home Experts",
    template: "%s | ReefTech Solutions - Hawaii Smart Home Integration"
  },
  description: "Silicon Valley expertise with island availability. From smart locks to saunas - we handle your entire building technology stack. Professional smart home integration, vacation rental automation, and specialized sauna maintenance on Hawaii's Big Island.",
  keywords: [
    // Primary Keywords
    "smart home Hawaii",
    "vacation rental automation Hawaii",
    "Big Island smart home integration",
    "Hawaii building technology solutions",
    
    // Service-specific Keywords
    "smart locks Hawaii",
    "pool automation Big Island",
    "sauna maintenance Hawaii",
    "vacation rental tech solutions",
    "smart home installation Kona",
    "property management technology Hawaii",
    
    // Location-specific
    "Kailua-Kona smart home",
    "Big Island electrical contractor",
    "Hawaii tech support",
    "Waimea smart home services",
    "Hilo home automation",
    
    // Industry-specific
    "vacation rental check-in automation",
    "smart spa systems Hawaii",
    "building automation Hawaii",
    "IoT solutions Big Island",
    "home security systems Hawaii",
    "smart thermostat installation",
    "automated pool systems",
    "smart lighting Hawaii"
  ],
  authors: [{ name: "ReefTech Solutions", url: "https://reeftechsolutions.com" }],
  creator: "ReefTech Solutions",
  publisher: "ReefTech Solutions",
  applicationName: "ReefTech Solutions",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reeftech.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: "ReefTech Solutions - Your Property's Complete Tech Department",
    description: "Silicon Valley expertise with island availability. From smart locks to saunas - we handle your entire building technology stack in Hawaii.",
    url: 'https://reeftech.io',
    siteName: 'ReefTech Solutions',
    images: [
      {
        url: '/photos/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ReefTech Solutions - Smart Home Integration and Building Technology Solutions in Hawaii',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'United States',
    emails: ['info@reeftech.io'],
    phoneNumbers: ['+1-808-303-4627'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@reeftechsolutions',
    creator: '@reeftechsolutions',
    title: "ReefTech Solutions - Hawaii's Smart Home Experts",
    description: "Your Property's Complete Tech Department. Smart home integration, vacation rental automation, and building technology solutions in Hawaii.",
    images: {
      url: '/photos/og-image.jpg',
      alt: 'ReefTech Solutions - Smart Home Integration Hawaii',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#00CED1' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code', // Add when you get Google Search Console set up
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'Smart Home Technology',
  classification: 'Professional Smart Home Integration Services',
  other: {
    'geo.region': 'US-HI',
    'geo.placename': 'Big Island, Hawaii',
    'geo.position': '19.8968;-155.5828',
    'ICBM': '19.8968, -155.5828',
    'rating': '5',
    'coverage': 'Hawaii',
    'distribution': 'Local',
    'target': 'property managers, vacation rental owners, homeowners, businesses',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ReefTech Solutions',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#00CED1',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Enhanced Structured Data - Multiple Schema Types */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://reeftech.io/#organization",
                "name": "ReefTech Solutions",
                "alternateName": "ReefTech",
                "description": "Your Property's Complete Tech Department. Professional smart home integration and automation services for Hawaii vacation rentals and luxury properties.",
                "url": "https://reeftech.io",
                "logo": "https://reeftech.io/photos/logo.png",
                "image": [
                  "https://reeftech.io/photos/logo.png",
                  "https://reeftech.io/photos/og-image.jpg"
                ],
                "telephone": "+1-808-303-4627",
                "email": "info@reeftech.io",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kailua-Kona",
                  "addressRegion": "Hawaii",
                  "addressCountry": "US",
                  "postalCode": "96740"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 19.8968,
                  "longitude": -155.5828
                },
                "areaServed": [
                  {
                    "@type": "State",
                    "name": "Hawaii"
                  },
                  {
                    "@type": "City",
                    "name": "Kailua-Kona"
                  },
                  {
                    "@type": "City", 
                    "name": "Hilo"
                  },
                  {
                    "@type": "City",
                    "name": "Waimea"
                  }
                ],
                "serviceArea": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 19.8968,
                    "longitude": -155.5828
                  },
                  "geoRadius": "100000"
                },
                "priceRange": "$$-$$$",
                "currenciesAccepted": "USD",
                "paymentAccepted": "Cash, Credit Card, Check, Bank Transfer",
                "openingHours": [
                  "Mo-Fr 08:00-18:00",
                  "Sa 09:00-16:00"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Smart Home & Building Technology Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Smart Home Integration",
                        "description": "Complete home automation systems with app control, voice integration, and smart device coordination",
                        "provider": {
                          "@id": "https://reeftech.io/#organization"
                        }
                      }
                    },
                    {
                      "@type": "Offer", 
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Vacation Rental Automation",
                        "description": "Smart locks, automated check-in systems, remote monitoring, and guest management technology",
                        "provider": {
                          "@id": "https://reeftech.io/#organization"
                        }
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service", 
                        "name": "Pool & Spa Automation",
                        "description": "Smart pH monitoring, automated chemical systems, app-controlled pool equipment, and maintenance scheduling",
                        "provider": {
                          "@id": "https://reeftech.io/#organization"
                        }
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Sauna & Spa Maintenance", 
                        "description": "Specialized sauna repair, smart spa systems, and maintenance - the only certified specialist on Big Island",
                        "provider": {
                          "@id": "https://reeftech.io/#organization"
                        }
                      }
                    }
                  ]
                },
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "name": "Free Consultation",
                    "description": "Complimentary assessment of your property's technology needs",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "28",
                  "bestRating": "5",
                  "worstRating": "5"
                },
                "review": [
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "Property Manager"
                    },
                    "reviewBody": "ReefTech transformed our vacation rental operation with smart automation that saves us hours every week."
                  }
                ],
                "sameAs": [
                  "https://www.yelp.com/biz/reeftech-solutions",
                  "https://www.facebook.com/reeftechsolutions", 
                  "https://www.linkedin.com/company/reeftech-solutions"
                ],
                "knowsAbout": [
                  "Smart Home Technology",
                  "Home Automation",
                  "Vacation Rental Management",
                  "Pool Automation",
                  "Sauna Maintenance",
                  "Building Technology",
                  "IoT Systems",
                  "Smart Locks",
                  "Security Systems"
                ],
                "slogan": "Your Property's Complete Tech Department"
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://reeftech.io/#website",
                "url": "https://reeftech.io",
                "name": "ReefTech Solutions",
                "description": "Hawaii's premier smart home integration and building technology solutions provider",
                "publisher": {
                  "@id": "https://reeftech.io/#organization"
                },
                "potentialAction": [
                  {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://reeftech.io/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                ],
                "inLanguage": "en-US"
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://reeftech.io/#service",
                "name": "ReefTech Solutions Professional Services",
                "provider": {
                  "@id": "https://reeftech.io/#organization"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Hawaii"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Technology Integration Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Smart Home Consultation",
                        "description": "Professional assessment and planning for smart home integration"
                      }
                    }
                  ]
                }
              }
            ])
          }}
        />
        
        {/* Additional SEO enhancements */}
        <link rel="canonical" href="https://reeftech.io/" />
        <link rel="alternate" hrefLang="en-US" href="https://reeftech.io/" />
        
        {/* Security headers */}
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
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