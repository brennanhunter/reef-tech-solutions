'use client';

import MarketingHeader from './components/MarketingHeader';
import EmergencyCTASection from './components/home/EmergencyCTASection';
import ProcessSection from './components/home/ProcessSection';
import ResourcesSection from './components/home/ResourcesSection';
import RequestFormSection from './components/home/RequestFormSection';

export default function Home() {
  return (
    <>
  <MarketingHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Hero Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 py-8 z-30">
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <div className="transition-all duration-1000">
              <div className="mb-8 sm:mb-12">
                {/* Logo */}
                <div className="flex items-center justify-center mb-8 sm:mb-12">
                  <img 
                    src="/photos/logo.png" 
                    alt="ReefTech Solutions Logo" 
                    className="h-24 sm:h-32 md:h-40 lg:h-56 xl:h-64 w-auto animate-pulse"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(0, 206, 209, 0.5))'
                    }}
                  />
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 sm:mb-8">
                  <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-2xl">
                    ReefTech Solutions
                  </span>
                </h1>

                {/* Tagline */}
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-8 sm:mb-12 text-cyan-100 leading-relaxed">
                  Your Property&apos;s Tech Department
                </p>

                {/* Sub-description */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 mb-8 sm:mb-12">
                  Smart home integration, vacation rental automation, and advanced technology solutions for Hawaii&apos;s Big Island.</p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href="#request-form" 
                    className="bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:from-lime-300 hover:to-cyan-300 transition-all duration-300 hover:scale-105 shadow-2xl"
                    style={{
                      boxShadow: '0 0 30px rgba(50, 205, 50, 0.4)'
                    }}
                  >
                    Get Started Today
                  </a>
                  <a 
                    href="tel:+1-808-303-4627" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Call (808) 303-4627
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (updated with images + scroll animations) */}
      <section id="services" className="py-28 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
        {/* background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(circle_at_center,black,transparent)]">
          <svg className="w-full h-full" viewBox="0 0 400 400" aria-hidden="true">
            <defs>
              <pattern id="svc-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#svc-grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-lime-500 bg-clip-text text-transparent">Integrated Technology Solutions</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">Complete building technology stack – from smart locks to saunas</p>
          </div>
          {/* Animated card grid */}
          <ServicesAnimatedGrid />
        </div>
      </section>

  {/* Emergency Section moved directly below Services */}
  <EmergencyCTASection />

      

      {/* Featured Projects Showcase */}
      <section id="projects" className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        {/* Advanced circuit background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="projects-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10,0 L10,10 M0,10 L20,10 M5,5 L15,5" stroke="#00CED1" strokeWidth="0.4" opacity="0.6"/>
                <path d="M5,0 L5,5 M15,5 L15,10" stroke="#32CD32" strokeWidth="0.3" opacity="0.5"/>
                <circle cx="10" cy="10" r="0.8" fill="#00CED1" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="5" cy="5" r="0.5" fill="#32CD32" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite"/>
                </circle>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#projects-circuit)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-lime-400 bg-clip-text text-transparent">
                Featured Project Gallery
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-8">
              Hawaii&apos;s Premier Smart Home Installations
            </h3>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From luxury vacation rentals to high-end residential properties - see the difference professional integration makes
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Project 1 - IMG_6300 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-700 hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/photos/work/IMG_6300.jpg" 
                  alt="Luxury Smart Home Integration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
                  Luxury Villa Automation
                </h4>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Complete smart home integration with automated lighting, climate control, and security systems for this high-end vacation rental property.
                </p>
              </div>
            </div>

            {/* Project 2 - IMG_6655 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-lime-500/25 transition-all duration-700 hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/photos/work/IMG_6655.jpg" 
                  alt="Modern Smart Kitchen"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-lime-400 to-teal-400 bg-clip-text text-transparent">
                  Smart Kitchen Integration
                </h4>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Seamless technology integration in this modern kitchen with smart appliances, automated lighting scenes, and voice control systems.
                </p>
              </div>
            </div>

            {/* Project 3 - IMG_5787 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-teal-500/25 transition-all duration-700 hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/photos/work/IMG_5787.jpg" 
                  alt="Premium Living Space"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Premium Living Space
                </h4>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Elegant smart home solution featuring automated window treatments, ambient lighting control, and integrated entertainment systems.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30">
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
                  Ready to Transform Your Property?
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                From concept to completion - see how professional smart home integration can elevate your vacation rental or luxury property.
              </p>
              <a 
                href="#request-form" 
                className="inline-block bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-10 py-5 rounded-full text-xl font-semibold hover:from-lime-300 hover:to-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                style={{
                  boxShadow: '0 0 30px rgba(50, 205, 50, 0.4)'
                }}
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Subtle tech pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="about-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10,0 L10,10 M0,10 L20,10" stroke="#0077BE" strokeWidth="0.4" opacity="0.6"/>
                <circle cx="10" cy="10" r="1" fill="#32CD32" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#about-circuit)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-lime-500 bg-clip-text text-transparent">
                  Your Technology Partner
                </span>
              </h3>
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed">
                <p className="text-2xl font-medium text-gray-700">
                  Serving Hawaii&apos;s luxury properties with advanced smart systems and reliable technical execution.
                </p>
                <p>
                  With extensive experience in complex systems and smart home integration, ReefTech delivers professional solutions that enhance property value and guest experiences. 
                  <span className="text-teal-600 font-semibold">Engineering background</span> and 
                  <span className="text-cyan-600 font-semibold"> high-end project experience</span> ensure 
                  your properties benefit from proven, reliable technology solutions.
                </p>
                <p>
                  What sets ReefTech apart is our focus on <span className="text-lime-600 font-semibold">specialized services</span> - 
                  from smart home automation to sauna maintenance. 
                  We handle the technology challenges that give property managers peace of mind.
                </p>
                <p className="text-2xl font-semibold">
                  <span className="bg-gradient-to-r from-teal-600 to-lime-500 bg-clip-text text-transparent">
                    &ldquo;Work smarter, not harder - technology solutions that actually work.&rdquo;
                  </span>
                </p>
              </div>
              
              {/* Enhanced credentials */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl border border-cyan-200 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">10+ yrs</div>
                  <div className="text-lg text-gray-600">Experience</div>
                </div>
                <div className="bg-gradient-to-br from-lime-50 to-cyan-50 p-6 rounded-2xl border border-lime-200 text-center">
                  <div className="text-3xl font-bold text-lime-600 mb-2">$5-10M</div>
                  <div className="text-lg text-gray-600">Insurance</div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-lime-50 p-6 rounded-2xl border border-teal-200 text-center">
                  <div className="text-lg text-gray-600">Sauna Specialist</div>
                </div>
              </div>
            </div>
            
            <div className="text-center relative">
              {/* Project showcase instead of headshot */}
              <div className="grid grid-cols-2 gap-6">
                {/* Top left - Technology close-up */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3]">
                  <img 
                    src="/photos/work/IMG_6931.jpg" 
                    alt="Professional Installation Work"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Professional Installation
                  </div>
                </div>
                
                {/* Top right - Clean finished work */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3]">
                  <img 
                    src="/photos/work/IMG_7164.jpg" 
                    alt="Smart Home Technology"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Smart Integration
                  </div>
                </div>
                
                {/* Bottom - Spanning both columns */}
                <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl group aspect-[16/6]">
                  <img 
                    src="/photos/work/IMG_6814.jpg" 
                    alt="Advanced Technology Systems"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Advanced Systems
                  </div>
                </div>
              </div>
              
              {/* Floating tech elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-lime-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl animate-pulse">
                🔧
              </div>
            </div>
          </div>
        </div>
      </section>

  <ProcessSection />

  <ResourcesSection />

  <RequestFormSection />
    </>
  );
}

// ServicesAnimatedGrid component (inline for now; could be extracted later)
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ServiceCardData { title: string; image: string; description: string; highlights: string[]; }

const serviceCards: ServiceCardData[] = [
  {
    title: 'Smart Home Integration',
    image: '/photos/services/HomeAutomation.jpg',
    description: 'Complete home automation systems with unified control, voice integration and custom programming for effortless living.',
    highlights: ['Control systems', 'Voice + app scenes', 'Climate & shades', 'Custom dashboards']
  },
  {
    title: 'Vacation Rental Automation',
    image: '/photos/services/VacationRental.jpg',
    description: 'Seamless guest experiences with secure, timed access, remote monitoring and turnover efficiency.',
    highlights: ['Smart locks', 'Guest access windows', 'Noise monitoring', 'Turnover workflows']
  },
  {
    title: 'Pool & Spa Automation',
    image: '/photos/services/Spa.jpg',
    description: 'Remote chemistry, heating and equipment insight from anywhere on island for pristine water quality.',
    highlights: ['pH / ORP monitoring', 'Heater control', 'Automated dosing', 'Leak / flow alerts']
  },
  {
    title: 'Security & Access Systems',
    image: '/photos/services/Security.jpg',
    description: 'Layered protection combining cameras, smart access, monitoring and audit trail visibility.',
    highlights: ['Mag locks & keypads', 'Camera systems', 'Entry analytics', 'Remote audit trail']
  },
  {
    title: 'Sauna & Spa Maintenance',
    image: '/photos/services/Sauna.jpg',
    description: 'Specialized repair & modernization for residential and commercial sauna systems.',
    highlights: ['Diagnostics', 'Control retrofits', 'Heating elements', 'Preventive service']
  },
  {
    title: 'Smart Lighting Design',
    image: '/photos/services/Lighting.jpg',
    description: 'Architectural & landscape lighting elevating mood, safety and efficiency with scene programming.',
    highlights: ['Scene programming', 'Landscape low‑voltage', 'Energy optimization', 'RGBW accents']
  }
];

function ServicesAnimatedGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => { if (inView) controls.start('visible'); }, [inView, controls]);

  return (
    <div ref={containerRef} className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
      {serviceCards.map((card, i) => (
        <motion.div
          key={card.title}
          initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
            className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 relative border border-cyan-100 hover:border-cyan-300"
        >
          <div className="relative h-56 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading={i < 2 ? 'eager' : 'lazy'} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <h3 className="absolute bottom-4 left-5 right-5 text-2xl font-semibold text-white drop-shadow-md">{card.title}</h3>
          </div>
          <div className="p-8 flex flex-col h-full">
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">{card.description}</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mb-6">
              {card.highlights.map(h => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-lime-500 shadow-[0_0_0_3px_rgba(6,182,212,0.15)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200">
              <a href="#request-form" className="text-sm font-semibold text-cyan-700 group-hover:text-cyan-600 flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
              </a>
              <span className="text-[11px] uppercase tracking-wider font-medium text-gray-400">ReefTech</span>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-cyan-400/0 group-hover:ring-4 group-hover:ring-cyan-400/30 transition-all duration-500" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}