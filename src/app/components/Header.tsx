'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-600 text-white sticky top-0 z-[10000] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl md:text-3xl font-bold tracking-tight">
              ReefTech Solutions
            </div>
            <div className="text-sm md:text-base opacity-90 font-light">
              Smart Home Integration Specialist
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#services" 
              className="hover:text-lime-400 transition-colors duration-300 font-medium"
            >
              Services
            </a>
            <a 
              href="#about" 
              className="hover:text-lime-400 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="#request-form" 
              className="hover:text-lime-400 transition-colors duration-300 font-medium"
            >
              Get Quote
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:8083034627" 
              className="text-lg font-semibold hover:text-lime-400 transition-colors duration-300"
            >
              📞 (808) 303-4627
            </a>
            <a 
              href="#request-form" 
              className="bg-lime-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-105"
            >
              Get Estimate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="hover:text-lime-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="hover:text-lime-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#request-form" 
                className="hover:text-lime-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </a>
              <div className="pt-4 border-t border-white/20">
                <a 
                  href="tel:8083034627" 
                  className="block text-lg font-semibold hover:text-lime-400 transition-colors duration-300 mb-3"
                >
                  📞 (808) 303-4627
                </a>
                <a 
                  href="#request-form" 
                  className="inline-block bg-lime-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Estimate
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}