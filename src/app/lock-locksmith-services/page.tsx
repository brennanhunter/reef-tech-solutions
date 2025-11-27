import { Metadata } from 'next';
import Link from 'next/link';
import { KeyRound, Lock, DoorOpen, ShieldCheck, Clock, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lock & Locksmith Services Big Island Hawaii | ReefTech Solutions',
  description: 'Professional locksmith services on Big Island Hawaii. Lock installation, repair, emergency lockout service, and security upgrades in Kona, Waimea, and Hilo.',
  keywords: 'locksmith big island, lock installation hawaii, lockout service kona, lock repair waimea, emergency locksmith hilo, commercial locks, residential locks, deadbolt installation, lock rekeying big island',
  openGraph: {
    title: 'Lock & Locksmith Services Big Island Hawaii | ReefTech Solutions',
    description: 'Professional locksmith services on Big Island Hawaii. Lock installation, repair, emergency lockout service, and security upgrades.',
    url: 'https://reeftechsolutions.com/lock-locksmith-services',
    type: 'website',
  },
};

export default function LockLocksmithServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
              <KeyRound className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Lock & Locksmith Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert lock installation, repair, and emergency lockout service across Big Island Hawaii
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                <span>Expert Installation</span>
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
              Our Locksmith Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lock Installation */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Lock Installation</h3>
                <p className="text-gray-600 mb-4">
                  Professional installation of deadbolts, door locks, smart locks, and high-security lock systems for residential and commercial properties.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Deadbolt installation</li>
                  <li>• Smart lock systems</li>
                  <li>• Commercial grade locks</li>
                  <li>• High-security locks</li>
                </ul>
              </div>

              {/* Emergency Lockout Service */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <DoorOpen className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Emergency Lockout Service</h3>
                <p className="text-gray-600 mb-4">
                  Fast response for lockouts. Available 24/7 for residential, commercial, and vehicle lockout emergencies across Big Island.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Home lockout service</li>
                  <li>• Office lockout assistance</li>
                  <li>• Quick response time</li>
                  <li>• Non-destructive entry</li>
                </ul>
              </div>

              {/* Lock Repair & Rekeying */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Lock Repair & Rekeying</h3>
                <p className="text-gray-600 mb-4">
                  Expert repair of damaged or malfunctioning locks. Rekeying services for enhanced security without replacing entire lock systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Lock mechanism repair</li>
                  <li>• Key duplication</li>
                  <li>• Rekey existing locks</li>
                  <li>• Master key systems</li>
                </ul>
              </div>

              {/* Commercial Lock Services */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Commercial Lock Systems</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive commercial locksmith services including access control, panic bars, and high-security lock installations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Access control systems</li>
                  <li>• Panic bar installation</li>
                  <li>• Office lock upgrades</li>
                  <li>• Security assessments</li>
                </ul>
              </div>

              {/* Residential Lock Services */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <KeyRound className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Residential Lock Services</h3>
                <p className="text-gray-600 mb-4">
                  Complete residential locksmith solutions from lock upgrades to smart lock installation for enhanced home security.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Home lock installation</li>
                  <li>• Smart lock setup</li>
                  <li>• Lock replacement</li>
                  <li>• Security upgrades</li>
                </ul>
              </div>

              {/* Security Upgrades */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Security Upgrades</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your property security with modern lock technology, reinforced strike plates, and comprehensive security assessments.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Security consultations</li>
                  <li>• Lock technology upgrades</li>
                  <li>• Reinforced hardware</li>
                  <li>• Multi-point locks</li>
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
              Why Choose ReefTech Solutions for Locksmith Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Fast Response Times</h3>
                  <p className="text-gray-600">
                    Emergency lockout service available 24/7 with rapid response across Big Island Hawaii.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Technicians</h3>
                  <p className="text-gray-600">
                    Experienced locksmith professionals trained in the latest lock technology and security systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Licensed & Insured</h3>
                  <p className="text-gray-600">
                    Fully licensed and insured locksmith services for your peace of mind and protection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <KeyRound className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Quality Products</h3>
                  <p className="text-gray-600">
                    We use only high-quality locks and hardware from trusted manufacturers for lasting security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Serving All of Big Island Hawaii</h2>
            <p className="text-lg text-gray-600 mb-8">
              Professional locksmith services available throughout Big Island, including Kona, Waimea, Hilo, and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm font-semibold text-gray-700">
              <span className="px-4 py-2 bg-blue-100 rounded-full">Kona</span>
              <span className="px-4 py-2 bg-blue-100 rounded-full">Waimea</span>
              <span className="px-4 py-2 bg-blue-100 rounded-full">Hilo</span>
              <span className="px-4 py-2 bg-blue-100 rounded-full">Kailua-Kona</span>
              <span className="px-4 py-2 bg-blue-100 rounded-full">Kohala Coast</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Locksmith? We&apos;re Here to Help
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              From emergency lockouts to security upgrades, our expert locksmiths are ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8089370797"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <PhoneIcon />
                Call (808) 937-0797
              </a>
              <Link
                href="/#request-form"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
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
            'name': 'Lock & Locksmith Services',
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
            'description': 'Professional locksmith services on Big Island Hawaii including lock installation, repair, emergency lockout service, and security upgrades.',
            'serviceType': 'Locksmith Services',
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
