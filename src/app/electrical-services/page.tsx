import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Lightbulb, Cable, ShieldAlert, Clock, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Minor Electrical Services Big Island Hawaii | ReefTech Solutions',
  description: 'Minor electrical services on Big Island Hawaii. Outlet repairs, switch replacement, lighting installation, and basic electrical work in Kona, Waimea, and Hilo.',
  keywords: 'electrical services big island, electrical repair kona, outlet repair waimea, lighting installation hilo, switch replacement, electrical troubleshooting, light fixture installation, ceiling fan installation, minor electrical work big island',
  openGraph: {
    title: 'Minor Electrical Services Big Island Hawaii | ReefTech Solutions',
    description: 'Minor electrical services on Big Island Hawaii. Outlet repairs, switch replacement, lighting installation, and basic electrical work.',
    url: 'https://reeftechsolutions.com/electrical-services',
    type: 'website',
  },
};

export default function ElectricalServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
              <Zap className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Minor Electrical Services Big Island Hawaii
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100">
              Outlet repairs, switch replacement, lighting installation, and basic electrical work across Big Island
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                <span>Quality Workmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Our Electrical Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Electrical Repairs */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Electrical Repairs</h3>
                <p className="text-gray-600 mb-4">
                  Basic electrical repair services for minor issues. Outlet and switch repairs, simple troubleshooting.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Outlet & switch repair</li>
                  <li>• Replace damaged outlets</li>
                  <li>• Switch replacement</li>
                  <li>• Basic troubleshooting</li>
                </ul>
              </div>

              {/* Lighting Installation */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Lighting Installation</h3>
                <p className="text-gray-600 mb-4">
                  Professional lighting installation including indoor, outdoor, LED upgrades, and specialty lighting systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Interior lighting</li>
                  <li>• Outdoor & landscape lighting</li>
                  <li>• LED retrofits</li>
                  <li>• Ceiling fan installation</li>
                </ul>
              </div>

              {/* Electrical Installations */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Cable className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Light Fixtures & Fans</h3>
                <p className="text-gray-600 mb-4">
                  Installation and replacement of light fixtures, ceiling fans, and other basic electrical fixtures.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Light fixture installation</li>
                  <li>• Ceiling fan installation</li>
                  <li>• Fixture replacement</li>
                  <li>• Dimmer switch installation</li>
                </ul>
              </div>

              {/* Commercial Electrical */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Commercial Minor Work</h3>
                <p className="text-gray-600 mb-4">
                  Minor electrical work for commercial properties including outlet repairs and light fixture installation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Outlet repairs</li>
                  <li>• Light fixture replacement</li>
                  <li>• Switch installation</li>
                  <li>• Basic electrical fixes</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Choose ReefTech Solutions for Electrical Work?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Insured & Reliable</h3>
                  <p className="text-gray-600">
                    Insured handyman service specializing in minor electrical work for your protection and peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Prompt Service</h3>
                  <p className="text-gray-600">
                    Quick response times for electrical emergencies and efficient scheduling for planned installations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Quality Workmanship</h3>
                  <p className="text-gray-600">
                    Experienced handyman with attention to detail and commitment to quality electrical repairs and installations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Safety Focused</h3>
                  <p className="text-gray-600">
                    All minor electrical work performed with safety as the top priority following best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Electrical Issues */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Common Minor Electrical Issues We Handle
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  Flickering Lights
                </h3>
                <p className="text-gray-600 text-sm">
                  Loose connections, faulty switches, or circuit overload causing lights to flicker or dim.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  Dead Outlets
                </h3>
                <p className="text-gray-600 text-sm">
                  Non-functioning outlets due to wiring issues, GFCI trips, or damaged receptacles.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Serving All of Big Island Hawaii</h2>
            <p className="text-lg text-gray-600 mb-8">
              Professional electrical services available throughout Big Island, including Kona, Waimea, Hilo, and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm font-semibold text-gray-700">
              <span className="px-4 py-2 bg-yellow-100 rounded-full">Kona</span>
              <span className="px-4 py-2 bg-yellow-100 rounded-full">Waimea</span>
              <span className="px-4 py-2 bg-yellow-100 rounded-full">Hilo</span>
              <span className="px-4 py-2 bg-yellow-100 rounded-full">Kailua-Kona</span>
              <span className="px-4 py-2 bg-yellow-100 rounded-full">Kohala Coast</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Minor Electrical Work? We&apos;re Ready to Help
            </h2>
            <p className="text-xl mb-8 text-yellow-100">
              From outlet repairs to light fixture installations, we handle minor electrical work safely and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8089370797"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
              >
                <PhoneIcon />
                Call (808) 937-0797
              </a>
              <Link
                href="/#request-form"
                className="inline-flex items-center justify-center gap-2 bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-colors border-2 border-white"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Electrical Services',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'ReefTech Solutions',
              'telephone': '808-937-0797',
              'address': {
                '@type': 'PostalAddress',
                'addressRegion': 'HI',
                'addressLocality': 'Big Island',
              },
            },
            'areaServed': {
              '@type': 'State',
              'name': 'Hawaii',
            },
            'description': 'Minor electrical services on Big Island Hawaii including outlet repairs, switch replacement, lighting installation, and basic electrical work.',
            'serviceType': 'Electrical Services',
          }),
        }}
      />
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
