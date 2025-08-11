import Image from 'next/image';

interface Service {
  title: string;
  image: string;
  description: string;
  highlights: string[];
}

const services: Service[] = [
  {
    title: 'Smart Home Integration',
    image: '/photos/services-images/HomeAutomation.jpg',
    description: 'Unified control systems that make complex properties effortless to manage.',
    highlights: ['Control systems', 'Voice + app scenes', 'Climate & shades', 'Custom dashboards']
  },
  {
    title: 'Vacation Rental Automation',
    image: '/photos/services-images/VacationRental.jpg',
    description: 'Seamless guest experiences with secure, timed access and remote insight.',
    highlights: ['Smart locks', 'Guest access windows', 'Noise / occupancy', 'Turnover workflows']
  },
  {
    title: 'Pool & Spa Automation',
    image: '/photos/services-images/Spa.jpg',
    description: 'Remote chemistry, heating and equipment monitoring from anywhere on island.',
    highlights: ['pH / ORP monitoring', 'Heater control', 'Automated dosing', 'Leak / flow alerts']
  },
  {
    title: 'Security & Access Systems',
    image: '/photos/services-images/Security.jpg',
    description: 'Layered protection combining cameras, smart access and monitoring.',
    highlights: ['Mag locks & keypads', 'Camera systems', 'Entry analytics', 'Remote audit trail']
  },
  {
    title: 'Sauna & Spa Maintenance',
    image: '/photos/services-images/Sauna.jpg',
    description: 'Specialized repair and modernization for residential & commercial sauna systems.',
    highlights: ['Diagnostics', 'Control retrofits', 'Heating elements', 'Preventive service']
  },
  {
    title: 'Smart Lighting Design',
    image: '/photos/services-images/Lighting.jpg',
    description: 'Architectural + landscape lighting that elevates mood, safety and efficiency.',
    highlights: ['Scene programming', 'Low‑voltage landscape', 'Energy optimization', 'RGBW accents']
  }
];

export default function ServicesSection() {
  return (
  <section id="services" className="py-28 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
      {/* subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(circle_at_center,black,transparent)]">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="#06b6d4" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#services-grid)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-lime-500 bg-clip-text text-transparent">Integrated Technology Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">A unified stack of infrastructure, automation and maintenance that keeps premium island properties running reliably.</p>
        </div>

        {/* Card Grid */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
          {services.map(service => (
            <div key={service.title} className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 relative border border-cyan-100 hover:border-cyan-300">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  priority={service.title === 'Smart Home Integration'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <h3 className="absolute bottom-4 left-5 right-5 text-2xl font-semibold text-white drop-shadow-md">
                  {service.title}
                </h3>
              </div>
              {/* Body */}
              <div className="p-8 flex flex-col h-full">
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">{service.description}</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mb-6">
                  {service.highlights.map(h => (
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
                {/* hover accent ring */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-cyan-400/0 group-hover:ring-4 group-hover:ring-cyan-400/30 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-teal-600 to-lime-500 text-white px-8 py-14 flex flex-col md:flex-row md:items-center md:justify-between shadow-xl">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Build a Cohesive Technology Foundation</h3>
            <p className="text-lg md:text-xl text-white/90">Start with a consultation – we map existing infrastructure, identify gaps and propose phased upgrades that fit your operations.</p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <a href="#request-form" className="bg-white text-cyan-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg">Request Consultation</a>
            <a href="#process" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all text-lg">Our Process</a>
          </div>
          <div className="pointer-events-none absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
