'use client';

import { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Modern Header with Logo and Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <img 
                src="/photos/logo.png" 
                alt="ReefTech Solutions Logo" 
                className="h-12 w-auto"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(0, 206, 209, 0.3))'
                }}
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    ReefTech Solutions
                  </span>
                </h1>
                <p className="text-sm text-gray-600 font-medium">Your Property&apos;s Tech Department</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300">
                Projects
              </a>
              <a href="#resources" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300">
                Resources
              </a>
              
              {/* Call Now Button */}
              <a 
                href="tel:+1-808-303-4627" 
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
                style={{
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now
              </a>
              
              {/* Facebook Icon */}
              <a 
                href="https://www.facebook.com/reeftechsolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-300"
                title="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              
              {/* Instagram Icon */}
              <a 
                href="https://www.instagram.com/reeftechsolutions/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 p-2 transition-all duration-300"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a 
                href="#request-form" 
                className="bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-lime-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  boxShadow: '0 0 20px rgba(50, 205, 50, 0.3)'
                }}
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#services" 
                  className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#resources" 
                  className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </a>
                
                {/* Call Now Button Mobile */}
                <a 
                  href="tel:+1-808-303-4627" 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 text-center shadow-lg flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Now: (808) 303-4627
                </a>
                
                {/* Facebook Link Mobile */}
                <a 
                  href="https://www.facebook.com/reeftechsolutions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center shadow-md flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Facebook className="w-5 h-5" />
                  Follow on Facebook
                </a>
                
                {/* Instagram Link Mobile */}
                <a 
                  href="https://www.instagram.com/reeftechsolutions/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center shadow-md flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
                
                <a 
                  href="#request-form" 
                  className="bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-lime-400 hover:to-cyan-400 transition-all duration-300 text-center shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    boxShadow: '0 0 20px rgba(50, 205, 50, 0.3)'
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Beautiful Static Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-teal-900 z-10">
          {/* Enhanced Circuit Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="hero-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M10,0 L10,10 M0,10 L20,10 M5,5 L15,5" stroke="#00CED1" strokeWidth="0.8" opacity="0.8"/>
                  <path d="M5,0 L5,5 M15,5 L15,10" stroke="#32CD32" strokeWidth="0.6" opacity="0.7"/>
                  <circle cx="10" cy="10" r="1.2" fill="#00CED1" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="5" cy="5" r="0.8" fill="#32CD32" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="15" cy="5" r="0.6" fill="#40E0D0" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="4s" repeatCount="indefinite"/>
                  </circle>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#hero-circuit)"/>
            </svg>
          </div>
          
          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-1/3 right-12 w-2 h-2 bg-lime-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/3 left-16 w-4 h-4 bg-teal-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 right-8 w-3 h-3 bg-cyan-300 rounded-full animate-pulse opacity-70" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-lime-300 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-teal-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2.5s' }}></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 py-8 z-30">
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            {/* Content */}
            <div className="transition-all duration-1000">
              <div className="mb-8 sm:mb-12">
                {/* Much Bigger Animated Logo */}
                <div className="flex items-center justify-center mb-8 sm:mb-12">
                  <img 
                    src="/photos/logo.png" 
                    alt="ReefTech Solutions Logo" 
                    className="h-24 sm:h-32 md:h-40 lg:h-56 xl:h-64 w-auto animate-pulse"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(0, 206, 209, 0.6)) drop-shadow(0 0 60px rgba(50, 205, 50, 0.3))'
                    }}
                  />
                </div>

                {/* Animated ReefTech Solutions with Enhanced Gradient */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-cyan-400 via-teal-400 to-lime-400 bg-clip-text text-transparent animate-pulse">
                    ReefTech Solutions
                  </span>
                </h1>
                
                {/* Enhanced Tagline with Better Circuit Animation */}
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-cyan-300 font-semibold mb-4 sm:mb-6 relative">
                  <span className="relative z-10">Your Property&apos;s Complete Tech Department</span>
                  {/* Multiple animated circuit lines */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-30" style={{ transform: 'translateY(-8px)' }}>
                    <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-30" style={{ transform: 'translateY(8px)' }}>
                    <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-lime-300 font-medium mb-6 sm:mb-8">
                  Integrated Building Technology Solutions • Hawaii
                </div>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-5xl mx-auto opacity-90 leading-relaxed">
                From smart locks to saunas - we handle your entire building technology stack. 
                Silicon Valley expertise with island availability. One call, complete solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <a 
                  href="#request-form" 
                  className="bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:from-lime-300 hover:to-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                  style={{
                    boxShadow: '0 0 30px rgba(50, 205, 50, 0.4)'
                  }}
                >
                  Get Complete Solutions
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-cyan-400 text-cyan-300 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 transform"
                >
                  Our Services
                </a>
              </div>
            </div>

            {/* Enhanced Floating Tech Elements */}
            <div className="absolute inset-0 pointer-events-none hidden sm:block">
              {/* Animated Circuit Nodes with varied timing */}
              <div className="absolute top-16 left-16 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute top-32 right-24 w-3 h-3 bg-lime-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 left-8 w-2 h-2 bg-teal-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-40 left-32 w-5 h-5 bg-teal-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-24 right-16 w-3 h-3 bg-cyan-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-20 right-1/3 w-2 h-2 bg-lime-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2.5s' }}></div>
              
              {/* Moving circuit lines */}
              <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent to-cyan-400 opacity-30 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent to-lime-400 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Subtle circuit background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="services-circuit" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M15,0 L15,15 M0,15 L30,15" stroke="#0077BE" strokeWidth="0.3" opacity="0.4"/>
                <circle cx="15" cy="15" r="0.8" fill="#32CD32" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#services-circuit)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-lime-500 bg-clip-text text-transparent">
                Integrated Technology Solutions
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete building technology stack - from smart locks to saunas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "🏠",
                title: "Smart Home Integration",
                description: "Complete home automation systems with app control, voice integration, and custom programming. From automated blinds to smart lighting scenes."
              },
              {
                icon: "🏨",
                title: "Vacation Rental Automation",
                description: "Smart locks for easy check-ins, automated guest systems, and remote monitoring solutions perfect for Hawaii vacation rentals."
              },
              {
                icon: "🏊",
                title: "Pool & Spa Automation",
                description: "Smart pH monitoring, automated chemical systems, and app-controlled pool equipment. Monitor your pool from anywhere on the island."
              },
              {
                icon: "🔒",
                title: "Security & Access Systems",
                description: "Magnetic locks, keypad entry, smart cameras, and integrated security systems. From basic door locks to resort-level access control."
              },
              {
                icon: "🌡️",
                title: "Sauna & Spa Maintenance",
                description: "The only specialist on Big Island for sauna repairs and smart spa systems. Others fly in from other islands - we're here when you need us."
              },
              {
                icon: "💡",
                title: "Smart Lighting Design",
                description: "Custom lighting solutions from landscape design to commercial installations. Energy-efficient, app-controlled, and stunning results."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-gradient-to-r hover:from-cyan-400 hover:to-lime-400 group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #00CED1, #32CD32) border-box'
                }}
              >
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-500 relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-teal-900 text-white relative overflow-hidden">
        {/* Enhanced circuit background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="why-choose-circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M12.5,0 L12.5,12.5 M0,12.5 L25,12.5 M6,6 L19,6" stroke="#00CED1" strokeWidth="0.6" opacity="0.7"/>
                <path d="M6,0 L6,6 M19,6 L19,12.5" stroke="#32CD32" strokeWidth="0.4" opacity="0.6"/>
                <circle cx="12.5" cy="12.5" r="1" fill="#00CED1" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="6" cy="6" r="0.7" fill="#32CD32" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.5s" repeatCount="indefinite"/>
                </circle>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#why-choose-circuit)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-lime-400 bg-clip-text text-transparent">
                Silicon Valley Expertise
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-6">
              Island Availability
            </h3>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Why vacation rental & property managers choose ReefTech for their complete technology stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                emoji: "🏝️",
                title: "Only Sauna Specialist on Big Island",
                description: "Sauna and spa maintenance specialist - competitors have to fly someone in from other islands. We're here when you need us."
              },
              {
                emoji: "🔧",
                title: "High-End Project Experience",
                description: "From San Francisco's tech giants to Hawaii's luxury properties - smart systems, automation, and technology integration done right."
              },
              {
                emoji: "⚡",
                title: "No Bureaucratic Delays",
                description: "$5-10 million insurance coverage means getting work done without permit delays. We handle the liability, you get results."
              },
              {
                emoji: "🎯",
                title: "Property Manager Focused",
                description: "We understand what property managers need: reliable technology, professional service, and solutions that work when you're not there."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-cyan-400/30 hover:border-lime-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">{item.emoji}</div>
                <h4 className="text-2xl font-bold mb-6 relative z-10">
                  <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
                    {item.title}
                  </span>
                </h4>
                <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  From high-tech San Francisco to Hawaii&apos;s luxury properties - bringing mainland expertise to island living.
                </p>
                <p>
                  With extensive experience in complex systems and smart home integration from the Bay Area&apos;s tech scene, 
                  ReefTech delivers professional solutions that enhance property value and guest experiences. 
                  <span className="text-teal-600 font-semibold">Engineering background</span> and 
                  <span className="text-cyan-600 font-semibold"> high-end project experience</span> ensure 
                  your properties benefit from proven, reliable technology solutions.
                </p>
                <p>
                  What sets ReefTech apart is our focus on <span className="text-lime-600 font-semibold">specialized services</span> - 
                  from smart home automation to sauna maintenance (the only specialist on Big Island). 
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
                  <div className="text-3xl font-bold text-teal-600 mb-2">Bay Area</div>
                  <div className="text-lg text-gray-600">Experience</div>
                </div>
                <div className="bg-gradient-to-br from-lime-50 to-cyan-50 p-6 rounded-2xl border border-lime-200 text-center">
                  <div className="text-3xl font-bold text-lime-600 mb-2">$5-10M</div>
                  <div className="text-lg text-gray-600">Insurance</div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-lime-50 p-6 rounded-2xl border border-teal-200 text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">Only</div>
                  <div className="text-lg text-gray-600">On Island</div>
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

      {/* Emergency Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Home Emergency? We&apos;re Here 24/7
            </h2>
            <p className="text-xl mb-8 text-green-100">
              While others fly in from other islands, we&apos;re already here. Big Island&apos;s only certified sauna specialist and smart home expert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+1-808-303-4627" 
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Emergency Line: (808) 303-4627
              </a>
              
              <div className="text-green-100 text-sm">
                <p className="font-semibold">✓ $5-10M Insurance Coverage</p>
                <p>✓ Same-Day Service Available</p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl mb-2">🔧</div>
                <h4 className="font-semibold mb-1">Sauna Repairs</h4>
                <p className="text-sm text-green-200">Island&apos;s only specialist</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl mb-2">🏠</div>
                <h4 className="font-semibold mb-1">Smart Home Issues</h4>
                <p className="text-sm text-green-200">System down? We fix it fast</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl mb-2">🏊</div>
                <h4 className="font-semibold mb-1">Pool Automation</h4>
                <p className="text-sm text-green-200">Remote monitoring setup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Expertise Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white relative overflow-hidden">
        {/* Dynamic circuit background */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="process-circuit" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M15,0 L15,15 M0,15 L30,15 M7,7 L23,7 M15,3 L15,11" stroke="#00CED1" strokeWidth="0.8" opacity="0.6"/>
                <path d="M7,0 L7,7 M23,7 L23,15 M3,11 L11,11 M19,11 L27,11" stroke="#32CD32" strokeWidth="0.6" opacity="0.5"/>
                <circle cx="15" cy="15" r="1.5" fill="#00CED1" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="7" cy="7" r="1" fill="#32CD32" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="23" cy="7" r="1" fill="#32CD32" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.5s" repeatCount="indefinite"/>
                </circle>
                <rect x="13" y="13" width="4" height="2" fill="none" stroke="#32CD32" strokeWidth="0.4" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#process-circuit)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-lime-400 bg-clip-text text-transparent">
                The ReefTech Process
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-8">
              From Concept to Smart Living
            </h3>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every project follows our proven methodology - ensuring reliability, elegance, and guest satisfaction
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                01
              </div>
              <h4 className="text-2xl font-bold mb-4 text-cyan-400">Discovery</h4>
              <p className="text-gray-300 leading-relaxed">
                Property assessment, guest experience goals, and technology requirements analysis
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-lime-400 to-cyan-500 rounded-full flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                02
              </div>
              <h4 className="text-2xl font-bold mb-4 text-lime-400">Design</h4>
              <p className="text-gray-300 leading-relaxed">
                Custom system architecture with scalable solutions and seamless integration planning
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-lime-500 rounded-full flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                03
              </div>
              <h4 className="text-2xl font-bold mb-4 text-teal-400">Install</h4>
              <p className="text-gray-300 leading-relaxed">
                Professional installation with minimal disruption and comprehensive testing protocols
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                04
              </div>
              <h4 className="text-2xl font-bold mb-4 text-cyan-300">Support</h4>
              <p className="text-gray-300 leading-relaxed">
                Ongoing maintenance, updates, and 24/7 support for continuous optimal performance
              </p>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
                  Core Expertise
                </span>
              </h3>
              <div className="space-y-6">
                {[
                  { skill: "Emergency Plumbing & Electric", level: "95%" },
                  { skill: "Basic Property Upkeep Checklist", level: "98%" },
                  { skill: "Mag Lock & Security Systems", level: "92%" },
                  { skill: "Property Management Support", level: "96%" },
                  { skill: "Sauna & Spa Maintenance", level: "94%" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold text-gray-200">{item.skill}</span>
                      <span className="text-cyan-400">{item.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: item.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Services & Equipment
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Emergency Repairs", "Property Inspections", "Mag Lock Installation", "Basic Electrical", 
                  "Plumbing Fixes", "Sauna Maintenance", "Security Setup", "Property Upkeep",
                  "System Troubleshooting", "Equipment Installation", "Maintenance Checks", "Property Support"
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-cyan-400/20 hover:border-lime-400/40 transition-all duration-300 text-center group"
                  >
                    <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-gray-800/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30">
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
                  Experience the Difference
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join Hawaii&apos;s leading property managers who trust ReefTech for their complete technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="#request-form" 
                  className="bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-10 py-5 rounded-full text-xl font-semibold hover:from-lime-300 hover:to-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                  style={{
                    boxShadow: '0 0 30px rgba(50, 205, 50, 0.4)'
                  }}
                >
                  Schedule Consultation
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-cyan-400 text-cyan-300 px-10 py-5 rounded-full text-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 transform"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Manager Resources Section */}
      <section id="resources" className="py-24 bg-gradient-to-br from-gray-800 via-slate-700 to-teal-800 text-white relative overflow-hidden">
        {/* Advanced circuit pattern */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="resources-circuit" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M15,0 L15,15 M0,15 L30,15 M7,7 L23,7 M15,3 L15,11" stroke="#00CED1" strokeWidth="0.7" opacity="0.6"/>
                <path d="M7,0 L7,7 M23,7 L23,15 M3,11 L11,11 M19,11 L27,11" stroke="#32CD32" strokeWidth="0.5" opacity="0.5"/>
                <circle cx="15" cy="15" r="1.2" fill="#00CED1" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="7" cy="7" r="0.8" fill="#32CD32" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite"/>
                </circle>
                <rect x="13" y="13" width="4" height="2" fill="none" stroke="#32CD32" strokeWidth="0.3" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#resources-circuit)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-lime-400 bg-clip-text text-transparent">
                Professional Resources
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-6">
              Free Tools for Property Managers
            </h3>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Expert guides and checklists to optimize your vacation rentals and luxury properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-700/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-10 shadow-2xl text-center border border-cyan-400/30 hover:border-lime-400/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">📋</div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Vacation Rental Tech Checklist
                </span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed relative z-10">
                Essential smart home and automation checks for seamless guest experiences
              </p>
              <a 
                href="/pdfs/TechChecklist.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-lime-300 hover:to-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-xl transform relative z-10"
                style={{
                  boxShadow: '0 0 25px rgba(50, 205, 50, 0.4)'
                }}
              >
                Download Free PDF
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-10 shadow-2xl text-center border border-cyan-400/30 hover:border-lime-400/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">🔧</div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">
                <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
                  Smart Home Setup Guide
                </span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed relative z-10">
                Step-by-step guide for integrating automation into vacation rentals
              </p>
              <a 
                href="/pdfs/SmartHomeSetup.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-300 hover:to-teal-300 transition-all duration-300 hover:scale-105 hover:shadow-xl transform relative z-10"
                style={{
                  boxShadow: '0 0 25px rgba(0, 206, 209, 0.4)'
                }}
              >
                Get Your Copy
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-10 shadow-2xl text-center border border-cyan-400/30 hover:border-lime-400/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-lime-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">📱</div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">
                <span className="bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">
                  Remote Monitoring Solutions
                </span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed relative z-10">
                Technology options for managing multiple properties remotely
              </p>
              <a 
                href="/pdfs/RemoteMonitoring.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-teal-400 to-lime-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-300 hover:to-lime-300 transition-all duration-300 hover:scale-105 hover:shadow-xl transform relative z-10"
                style={{
                  boxShadow: '0 0 25px rgba(20, 184, 166, 0.4)'
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section id="request-form" className="py-24 bg-gradient-to-br from-teal-600 via-cyan-600 to-lime-500 text-white relative overflow-hidden">
        {/* Enhanced circuit background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="form-circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M12.5,0 L12.5,12.5 M0,12.5 L25,12.5 M6,6 L19,6 M12.5,3 L12.5,9" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.3"/>
                <path d="M6,0 L6,6 M19,6 L19,12.5 M3,9 L9,9 M16,9 L22,9" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.2"/>
                <circle cx="12.5" cy="12.5" r="1" fill="#FFFFFF" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="6" cy="6" r="0.7" fill="#FFFFFF" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite"/>
                </circle>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#form-circuit)"/>
          </svg>
        </div>

        {/* Floating tech elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-16 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-24 w-4 h-4 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-32 w-5 h-5 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-24 right-16 w-3 h-3 bg-white/35 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-white drop-shadow-lg">
                Ready to Upgrade Your Property?
              </span>
            </h2>
            <div className="text-3xl md:text-4xl font-semibold text-lime-200 mb-8">
              Get Complete Solutions Today
            </div>
            <p className="text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed">
              Custom technology integration and maintenance solutions for your smart home, vacation rental, or luxury property
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-3 shadow-2xl max-w-6xl mx-auto border border-white/30">
            <iframe 
              className="w-full rounded-2xl" 
              sandbox="allow-forms allow-scripts allow-same-origin allow-modals" 
              src="https://clienthub.getjobber.com/client_hubs/82c2ec52-21b5-4684-acbc-8aafff4565f1/public/work_request/embedded_new?source=embedded_inline&sp_websites_embed=true" 
              style={{
                visibility: 'visible', 
                width: '100%', 
                height: '1600px', 
                border: 'none',
                minHeight: '1600px'
              }} 
              title="Request Form"
            />
          </div>
          
          {/* Call to action below form */}
          <div className="text-center mt-12">
            <p className="text-xl text-lime-200 mb-6">
              🏝️ Island availability • 🔧 Silicon Valley expertise • ⚡ $5-10M insurance coverage
            </p>
            <div className="flex justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-lime-400 rounded-full mr-2 animate-pulse"></span>
                Smart Home Integration
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                Vacation Rental Automation
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-teal-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '1s' }}></span>
                Pool & Spa Systems
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}