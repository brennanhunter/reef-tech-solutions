export default function RequestFormSection() {
  // Restored to original Jobber.com embed section from previous inline implementation
  return (
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
        <div className="absolute top-16 left-16 w-6 h-6 bg-white/20 rounded-full animate-ping" />
        <div className="absolute top-32 right-24 w-4 h-4 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-32 w-5 h-5 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-24 right-16 w-3 h-3 bg-white/35 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
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
            🏝️ Island availability  • ⚡ $5-10M insurance coverage 
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
  );
}
