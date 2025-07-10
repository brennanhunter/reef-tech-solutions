export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 tracking-tight">
            Smart Technology Solutions for Hawaii Properties
          </h1>
          <div className="text-2xl md:text-3xl text-lime-400 font-semibold mb-4">
            Professional Smart Home Integration & Automation
          </div>
          <p className="text-xl mb-10 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Specialized technology solutions for vacation rentals and luxury properties. 
            We deliver professional smart home integration, automation systems, and maintenance services 
            that property managers trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="#request-form" 
              className="bg-lime-400 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Request Service
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 hover:scale-105"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional technology integration with proven expertise and reliable service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-lime-400 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Why Vacation Rental & Property Managers Choose ReefTech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized technology solutions for vacation rentals and multi-property management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                emoji: "🏝️",
                title: "Only One on Island",
                description: "Sauna and spa maintenance specialist - competitors have to fly someone in from other islands. We're here when you need us."
              },
              {
                emoji: "🔧",
                title: "Advanced Technology Integration",
                description: "Smart pool monitoring, automated systems, app-controlled solutions - seamlessly integrating modern technology with reliable performance."
              },
              {
                emoji: "⚡",
                title: "No Permits, No Problems",
                description: "$5-10 million insurance coverage means getting work done without bureaucratic delays. We handle the liability, you get results."
              },
              {
                emoji: "🎯",
                title: "Vacation Rental Specialists",
                description: "We understand vacation rental needs: smart locks for easy check-ins, automated systems for remote management, and reliable technology that works when you're not there."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border-l-4 border-lime-400 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h4 className="text-lg font-semibold text-blue-600 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                Professional Technology Specialist
              </h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I&apos;m Joshua, bringing advanced technology expertise to Hawaii&apos;s vacation rental and luxury properties. 
                  With extensive experience in complex systems and smart home integration, 
                  I deliver professional solutions that enhance property value and guest experiences.
                </p>
                <p>
                  I specialize in smart home systems and automation that work reliably for vacation rentals - 
                  from automated check-in systems to remote monitoring solutions that give property managers 
                  peace of mind when managing multiple properties.
                </p>
                <p>
                  My focus is on service-oriented solutions that solve real problems for property managers. 
                  Multiple patents and a commitment to staying current with technology 
                  ensure your properties benefit from proven, reliable automation systems.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 border-2 border-dashed border-blue-600 rounded-2xl p-16 text-blue-600 text-lg">
                [JOSHUA HEADSHOT PLACEHOLDER]<br />
                Professional photo of Joshua with tech equipment or at a job site
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Manager Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Resources for Property Managers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Free tools and checklists to help you manage vacation rentals and luxury properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Vacation Rental Tech Checklist
              </h3>
              <p className="text-gray-600 mb-6">
                Essential smart home and automation checks for seamless guest experiences
              </p>
              <a 
                href="#request-form" 
                className="inline-block bg-lime-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300"
              >
                Download Free PDF
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Smart Home Setup Guide
              </h3>
              <p className="text-gray-600 mb-6">
                Step-by-step guide for integrating automation into vacation rentals
              </p>
              <a 
                href="#request-form" 
                className="inline-block bg-lime-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300"
              >
                Get Your Copy
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Remote Monitoring Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Technology options for managing multiple properties remotely
              </p>
              <a 
                href="#request-form" 
                className="inline-block bg-lime-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section id="request-form" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Upgrade Your Property?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get a custom quote for your smart home integration or maintenance needs
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-2 shadow-2xl max-w-6xl mx-auto">
            <iframe 
              className="w-full rounded-lg" 
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
        </div>
      </section>
    </>
  );
}