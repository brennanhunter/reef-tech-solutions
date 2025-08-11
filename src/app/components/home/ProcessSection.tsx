export default function ProcessSection() {
  const steps = [
    { title: 'Reach Out', description: 'Get in touch through our form or schedule a quick call.' },
    { title: 'Free Consultation', description: 'We assess your needs and clarify the problem clearly.' },
    { title: 'Custom Plan', description: 'We design a cost-effective, scalable solution that fits your property.' },
    { title: 'Quality Execution', description: 'On-time delivery with testing, documentation, and long-term support.' },
  ];
  return (
    <section id="process" className="relative py-28 bg-gray-50 overflow-hidden mt-2">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100 via-teal-50 to-transparent opacity-70 -z-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-100 via-teal-50 to-transparent opacity-70 -z-10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="bg-white/70 backdrop-blur-md border border-gray-200/60 p-10 rounded-3xl shadow-xl mb-12" style={{ boxShadow: '0 8px 40px -12px rgba(0, 128, 128, 0.25)' }}>
          <h2 className="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">Our Process</h2>
          <p className="text-xl text-gray-700 font-medium leading-relaxed">A transparent, structured approach that delivers reliable, long-lasting results.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-cyan-50 border border-gray-200/80 group-hover:border-cyan-300/80 transition-all duration-300 shadow-lg group-hover:shadow-2xl" style={{ boxShadow: '0 12px 30px -10px rgba(0, 128, 128, 0.25)' }}></div>
              <div className="relative p-8 rounded-2xl flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-white flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 0 4px rgba(255,255,255,0.6), 0 10px 20px -6px rgba(0, 128, 128, 0.45)' }}>{i + 1}</div>
                <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a href="#request-form" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-cyan-400/30" style={{ boxShadow: '0 12px 30px -12px rgba(0,128,128,0.5)' }}>
            Book a Free Consultation →
          </a>
          <p className="mt-5 text-sm text-gray-600 font-medium">No obligation. Just expert insight and a clear path forward.</p>
        </div>
      </div>
    </section>
  );
}
