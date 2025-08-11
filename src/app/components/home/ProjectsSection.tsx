"use client";
import { MotionFade } from '../anim/MotionFade';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="projects-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,0 L10,10 M0,10 L20,10 M5,5 L15,5" stroke="#00CED1" strokeWidth="0.4" opacity="0.6" />
              <path d="M5,0 L5,5 M15,5 L15,10" stroke="#32CD32" strokeWidth="0.3" opacity="0.5" />
              <circle cx="10" cy="10" r="0.8" fill="#00CED1" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="5" cy="5" r="0.5" fill="#32CD32" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#projects-circuit)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <MotionFade as="h2" className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-lime-400 bg-clip-text text-transparent">Featured Project Gallery</span>
          </MotionFade>
          <MotionFade as="h3" delay={0.1} className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-8">Hawaii&apos;s Premier Smart Home Installations</MotionFade>
          <MotionFade delay={0.2} className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From luxury vacation rentals to high-end residential properties - see the difference professional integration makes
          </MotionFade>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((p, i) => (
            <MotionFade key={p.alt} delay={0.1 + i * 0.1} className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:scale-105 ${p.shadow}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}>{p.title}</h4>
                <p className="text-lg text-gray-200 leading-relaxed">{p.description}</p>
              </div>
            </MotionFade>
          ))}
        </div>
        <div className="text-center">
          <MotionFade delay={0.1} className="bg-gradient-to-r from-gray-800/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30">
            <MotionFade as="h3" delay={0.15} className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Ready to Transform Your Property?</span>
            </MotionFade>
            <MotionFade delay={0.25} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From concept to completion - see how professional smart home integration can elevate your vacation rental or luxury property.
            </MotionFade>
            <MotionFade delay={0.35}>
              <a href="#request-form" className="inline-block bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-10 py-5 rounded-full text-xl font-semibold hover:from-lime-300 hover:to-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-xl transform" style={{ boxShadow: '0 0 30px rgba(50, 205, 50, 0.4)' }}>
                Start Your Project
              </a>
            </MotionFade>
          </MotionFade>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    src: '/photos/work/IMG_6300.jpg',
    alt: 'Luxury Smart Home Integration',
    title: 'Luxury Villa Automation',
    description: 'Complete smart home integration with automated lighting, climate control, and security systems for this high-end vacation rental property.',
    gradient: 'from-cyan-400 to-lime-400',
    shadow: 'hover:shadow-cyan-500/25'
  },
  {
    src: '/photos/work/IMG_6655.jpg',
    alt: 'Modern Smart Kitchen',
    title: 'Smart Kitchen Integration',
    description: 'Seamless technology integration in this modern kitchen with smart appliances, automated lighting scenes, and voice control systems.',
    gradient: 'from-lime-400 to-teal-400',
    shadow: 'hover:shadow-lime-500/25'
  },
  {
    src: '/photos/work/IMG_5787.jpg',
    alt: 'Premium Living Space',
    title: 'Premium Living Space',
    description: 'Elegant smart home solution featuring automated window treatments, ambient lighting control, and integrated entertainment systems.',
    gradient: 'from-teal-400 to-cyan-400',
    shadow: 'hover:shadow-teal-500/25'
  }
];
