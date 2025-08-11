export default function ResourcesSection() {
  const resources = [
    {
      title: 'Vacation Rental Tech Checklist',
      description: 'Essential smart home + automation standards for seamless guest stays.',
      icon: '📋',
      href: '/pdfs/TechChecklist.pdf',
      cta: 'Download PDF'
    },
    {
      title: 'Smart Home Setup Guide',
      description: 'Step-by-step framework to integrate reliable automation in premium properties.',
      icon: '🔧',
      href: '/pdfs/SmartHomeSetup.pdf',
      cta: 'Open Guide'
    },
    {
      title: 'Remote Monitoring Solutions',
      description: 'Technology options to manage multiple locations with proactive insight.',
      icon: '📱',
      href: '/pdfs/RemoteMonitoring.pdf',
      cta: 'View PDF'
    }
  ];
  return (
    <section id="resources" className="relative py-24 bg-white overflow-hidden mt-2">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(0,206,209,0.12), transparent 70%), radial-gradient(circle at 80% 80%, rgba(72,209,204,0.12), transparent 70%)' }}></div>
      <div className="container mx-auto px-4 text-center relative z-10 max-w-5xl">
        <h2 className="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">Resources & Guides</h2>
        <p className="text-xl text-gray-700 font-medium leading-relaxed mb-16 max-w-2xl mx-auto">Empower your decisions with practical insights drawn from real-world electrical service experience.</p>
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {resources.map(r => (
            <div key={r.title} className="relative group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-cyan-50 to-teal-50 border border-gray-200/70 group-hover:border-cyan-300/80 transition-all duration-500 shadow-xl group-hover:shadow-2xl" style={{ boxShadow: '0 12px 30px -12px rgba(0,128,128,0.35)' }}></div>
              <div className="relative p-10 rounded-3xl flex flex-col items-center text-center gap-5">
                <div className="text-5xl" aria-hidden="true">{r.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{r.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed font-medium">{r.description}</p>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-700 font-semibold group-hover:gap-3 transition-all duration-300">
                  {r.cta} <span className="text-lg" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
          <a href="#request-form" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-cyan-400/30" style={{ boxShadow: '0 12px 30px -12px rgba(0,128,128,0.5)' }}>Need Advice? Request an Assessment →</a>
          <p className="text-sm text-gray-600 font-medium">Personalized recommendations based on your property’s requirements.</p>
        </div>
      </div>
    </section>
  );
}
