import type { Metadata } from 'next';
import Link from 'next/link';
import { WrenchScrewdriverIcon, CheckCircleIcon, BoltIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Plumber Big Island Hawaii | Emergency Plumbing Kona Waimea Hilo | ReefTech Solutions',
  description: 'Licensed plumber serving Big Island Hawaii. 24/7 emergency plumbing repairs, leak detection, water heater service, drain cleaning in Kona, Waimea, Hilo. Fast response. Call (808) 303-4627.',
  keywords: [
    'plumber Big Island Hawaii',
    'emergency plumber Kona',
    'plumbing services Waimea',
    'plumber Hilo Hawaii',
    'plumber Kamuela',
    'leak detection Big Island',
    'water heater repair Kona',
    'drain cleaning Waimea',
    'licensed plumber Hawaii',
    'emergency plumbing Big Island',
    'plumbing repairs Kailua-Kona',
    '24 hour plumber Big Island',
    'residential plumber Hawaii',
    'commercial plumber Kona',
    'fixture installation Big Island',
    'pipe repair Hawaii',
    'toilet repair Kona',
    'faucet installation Waimea'
  ],
  openGraph: {
    title: 'Licensed Plumber Big Island Hawaii | Emergency Plumbing Services',
    description: '24/7 emergency plumbing repairs in Kona, Waimea, Hilo. Licensed plumber for residential and commercial properties. Fast response, quality service.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://reeftech.io/plumbing-services',
  },
};

export default function PlumbingServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ReefTech Solutions",
              "telephone": "+1-808-303-4627",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kailua-Kona",
                "addressRegion": "HI",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Kailua-Kona"
              },
              {
                "@type": "City",
                "name": "Waimea"
              },
              {
                "@type": "City",
                "name": "Hilo"
              },
              {
                "@type": "City",
                "name": "Kamuela"
              },
              {
                "@type": "City",
                "name": "Captain Cook"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Plumbing Repairs",
                    "description": "24/7 emergency plumbing service for burst pipes, major leaks, and urgent repairs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Leak Detection and Repair",
                    "description": "Professional leak detection and repair services for residential and commercial properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Service",
                    "description": "Water heater installation, repair, and maintenance for tank and tankless systems"
                  }
                }
              ]
            }
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        
        {/* Header - H1 with primary keywords */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Licensed Plumber Big Island Hawaii
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Emergency Plumbing Services in Kona, Waimea, Hilo & Kamuela
          </p>
          <p className="text-lg text-gray-500">
            24/7 Emergency Service • Licensed & Insured • Fast Response
          </p>
        </div>

        {/* Intro paragraph with keywords */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Looking for a reliable <strong>plumber in Big Island Hawaii</strong>? ReefTech Solutions provides professional plumbing services throughout Kailua-Kona, Waimea, Hilo, and surrounding areas. Our licensed plumbers handle everything from emergency repairs to routine maintenance for residential and commercial properties.
          </p>
          <p>
            With fast response times and quality workmanship, we&apos;re your trusted choice for <strong>emergency plumbing in Big Island</strong>. Call <a href="tel:+1-808-303-4627" className="text-blue-600 font-semibold hover:underline">(808) 303-4627</a> for immediate service.
          </p>
        </div>

        {/* Services Section */}
        <div className="space-y-12">
          
          {/* Emergency Plumbing */}
          <section className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-start gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Emergency Plumbing Repairs
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Plumbing emergencies don&apos;t wait for business hours. Our emergency plumbing services are available when you need them most. Fast response times to minimize water damage and get your property back to normal quickly.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-3">Emergency Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Burst pipe repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Major leak repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Water heater failures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Sewer line backups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Toilet and drain clogs</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Leak Detection & Repair */}
          <section className="border-l-4 border-cyan-500 pl-6">
            <div className="flex items-start gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-12 h-12 text-cyan-600" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Leak Detection & Repair
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Early leak detection saves money and prevents extensive water damage. We use professional diagnostic tools to locate hidden leaks and provide lasting repair solutions.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-3">Leak Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Advanced leak detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Pipe leak repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Fixture leak repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Slab leak detection and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  <span>Water line leak repairs</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Fixture Installation */}
          <section className="border-l-4 border-teal-500 pl-6">
            <div className="flex items-start gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  <BoltIcon className="w-12 h-12 text-teal-600" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Fixture Installation & Replacement
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Professional installation of plumbing fixtures ensures proper function and prevents future problems. We install and replace all types of plumbing fixtures for residential and commercial properties.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-3">Installation Services:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Faucet installation and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Toilet installation and replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Sink and garbage disposal installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Shower and bathtub installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Water heater installation and replacement</span>
                </li>
              </ul>
            </div>
          </section>

        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 border border-blue-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Additional Plumbing Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Water Heater Service</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Tank and tankless water heaters</li>
                <li>• Maintenance and repairs</li>
                <li>• Installation and replacement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Drain Services</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Drain cleaning and clearing</li>
                <li>• Clog removal</li>
                <li>• Video camera inspections</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Pipe Services</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Pipe repair and replacement</li>
                <li>• Repiping services</li>
                <li>• Pipe insulation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Commercial Plumbing</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Restaurant plumbing</li>
                <li>• Vacation rental properties</li>
                <li>• Commercial maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            Serving Big Island Hawaii
          </h3>
          <p className="text-gray-700">
            Kailua-Kona • Waimea • Kamuela • Hilo • Captain Cook • Volcano • Holualoa • Waikoloa
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Need Plumbing Service?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+1-808-303-4627" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call (808) 303-4627
            </a>
            <Link 
              href="/#request-form" 
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Request Service
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
