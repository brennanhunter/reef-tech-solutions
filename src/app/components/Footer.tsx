export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-lime-400 text-xl font-semibold mb-6">
              ReefTech Solutions
            </h4>
            <div className="space-y-3 text-gray-300">
              <p>Smart Home Integration Specialist</p>
              <p>Serving Big Island, Hawaii</p>
              <p>
                <a 
                  href="tel:8083034627" 
                  className="hover:text-lime-400 transition-colors duration-300"
                >
                  📞 (808) 303-4627
                </a>
              </p>
              <p>Licensed, Bonded & Insured</p>
              <p className="text-sm opacity-75">$5-10 Million Insurance Coverage</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lime-400 text-xl font-semibold mb-6">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              {[
                'Smart Home Integration',
                'Vacation Rental Automation',
                'Pool & Spa Technology',
                'Security & Access Systems',
                'Sauna & Spa Maintenance',
                'Smart Lighting Design'
              ].map((service, index) => (
                <li 
                  key={index}
                  className="hover:text-lime-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lime-400 text-xl font-semibold mb-6">
              Vacation Rental Areas
            </h4>
            <ul className="space-y-2 text-gray-300">
              {[
                'Kailua-Kona Rentals',
                'Waimea/Kamuela Properties',
                'Kohala Coast Resorts',
                'Hilo Vacation Homes',
                'Volcano Area Properties',
                'Island-wide Service'
              ].map((area, index) => (
                <li 
                  key={index}
                  className="hover:text-lime-400 transition-colors duration-300"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Features */}
          <div className="space-y-4">
            <h4 className="text-lime-400 text-xl font-semibold mb-6">
              Connect With Us
            </h4>
            <div className="space-y-3 text-gray-300">
              <p>
                <a 
                  href="tel:8083034627" 
                  className="hover:text-lime-400 transition-colors duration-300 block"
                >
                  📞 Call: (808) 303-4627
                </a>
              </p>
              <p>
                <a 
                  href="#request-form" 
                  className="hover:text-lime-400 transition-colors duration-300 block"
                >
                  💻 Request Online Quote
                </a>
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-lime-400 font-medium">✓ Vacation Rental Specialists</p>
                <p className="text-lime-400 font-medium">✓ Multi-Property Discounts</p>
                <p className="text-lime-400 font-medium">✓ Remote Monitoring Setup</p>
                <p className="text-lime-400 font-medium">✓ Free Property Assessments</p>
                <div className="pt-2 text-xs opacity-50">
                  ₿ Crypto payments accepted
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-700 rounded-xl">
              <div className="text-3xl mb-3">🏝️</div>
              <h5 className="text-lime-400 font-semibold mb-2">Island's Only Sauna Specialist</h5>
              <p className="text-gray-300 text-sm">Others fly in from other islands - we're here when you need us</p>
            </div>
            <div className="text-center p-6 bg-gray-700 rounded-xl">
              <div className="text-3xl mb-3">🔧</div>
              <h5 className="text-lime-400 font-semibold mb-2">Advanced Technology Expertise</h5>
              <p className="text-gray-300 text-sm">Professional smart home integration and automation solutions</p>
            </div>
            <div className="text-center p-6 bg-gray-700 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h5 className="text-lime-400 font-semibold mb-2">No Permit Delays</h5>
              <p className="text-gray-300 text-sm">Massive insurance coverage means faster project completion</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 ReefTech Solutions. All rights reserved.
            </p>
            <p className="text-lime-400 font-medium text-lg">
              Advanced Technology. Professional Service.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">Licensing</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}