export default function EmergencyCTASection() {
  return (
    <section id="emergency" className="relative py-24 bg-red-600 overflow-hidden shadow-lg mt-2" style={{ background: 'linear-gradient(90deg, #ff3333, #cc0000)' }}>
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10 max-w-4xl">
        <div className="relative flex-1 text-center md:text-left">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4" style={{ color: 'white' }}>
            <span className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">Have an Emergency?</span>
          </h2>
          <p className="text-lg md:text-xl text-white font-medium mb-6 leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            We’re here for urgent electrical issues on Oahu. If you need immediate assistance with power outages, exposed wiring, or safety concerns, call us now.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+1-808-303-4627"
              className="bg-yellow-400 hover:bg-yellow-300 text-red-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <PhoneIcon /> Emergency Line: (808) 303-4627
            </a>
            <a
              href="#request-form"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-white/30"
            >
              Request Service
            </a>
          </div>
          <p className="mt-4 text-sm text-white/90 italic">Available for urgent electrical needs — call now for fast response.</p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[
            { label: 'Power Outages', icon: '⚡' },
            { label: 'Safety Hazards', icon: '🚨' },
            { label: 'Exposed Wiring', icon: '🛠️' },
            { label: 'Breaker Issues', icon: '🔧' },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-2" aria-hidden="true">{item.icon}</div>
              <span className="text-sm font-medium text-white text-center" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 70%)' }}></div>
    </section>
  );
}

function PhoneIcon() { return (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>); }
