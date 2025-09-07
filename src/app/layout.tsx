import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MarketingHeader from "./components/MarketingHeader";
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

const tanHeadline = localFont({
  src: "./fonts/TAN-Headline-Regular.woff2",
  variable: "--font-tan-headline",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "ReefTech Solutions - Your Property's Complete Tech Department | Hawaii Smart Home Experts",
    template: "%s | ReefTech Solutions - Hawaii Smart Home Integration"
  },
  description: "Professional smart home integration and building technology solutions for Hawaii's Big Island. From smart locks to saunas - we handle your entire property technology stack. Vacation rental automation, sauna maintenance, and comprehensive tech support.",
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
    
    // Location-specific Primary
    "sauna maintenance big island",
    "smart home waimea",
    "smart home kamuela",
    "vacation rental automation kona",
    "pool automation hilo",
    "smart locks big island",
    "home automation waimea",
    "building technology captain cook",
    "electrical services volcano hawaii",
    
    // Location + Service Combinations
    "Kailua-Kona smart home",
    "Big Island electrical contractor",
    "Hawaii tech support",
    "Waimea smart home services",
    "Hilo home automation",
    "Captain Cook smart locks",
    "Volcano home technology",
    "Kamuela building automation",
    "Kona vacation rental automation",
    "Big Island sauna repair",
    "Hawaii spa automation",
    "Waimea smart security",
    
    // Industry-specific
    "vacation rental check-in automation",
    "smart spa systems Hawaii",
    "building automation Hawaii",
    "IoT solutions Big Island",
    "home security systems Hawaii",
    "smart thermostat installation",
    "automated pool systems",
    "smart lighting Hawaii",
    "maglock installation big island",
    "automatic door hardware hawaii",
    "access control systems kona",
    "property tech solutions hawaii"
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
    description: "Professional smart home integration and building technology solutions for Hawaii's Big Island. From smart locks to saunas - we handle your entire property technology stack.",
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
  manifest: '/site.webmanifest',
  verification: {
    google: 'google95fe311b9c002ae1', // Google Search Console verification
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
    'coverage': 'Hawaii Big Island Kailua-Kona Waimea Hilo Captain-Cook Volcano Kamuela',
    'distribution': 'Local',
    'target': 'property managers, vacation rental owners, homeowners, businesses, sauna owners, spa operators',
    'service-areas': 'Kailua-Kona, Waimea, Kamuela, Hilo, Captain Cook, Volcano, Pahoa, Naalehu, Ocean View, Holualoa',
    'specialties': 'sauna maintenance big island, smart home waimea, vacation rental automation kona, pool automation hawaii',
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
                "email": "joshua@reeftech.io",
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
        className={`${geistSans.variable} ${geistMono.variable} ${tanHeadline.variable} antialiased`}
      >
        <MarketingHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}