"use client";
import { MotionFade } from '../anim/MotionFade';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="about-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,0 L10,10 M0,10 L20,10" stroke="#0077BE" strokeWidth="0.4" opacity="0.6" />
              <circle cx="10" cy="10" r="1" fill="#32CD32" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#about-circuit)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <MotionFade as="h3" className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-lime-500 bg-clip-text text-transparent">Your Technology Partner</span>
            </MotionFade>
            <div className="space-y-8 text-xl text-gray-600 leading-relaxed">
              <p className="text-2xl font-medium text-gray-700">Professional technology solutions for Hawaii&apos;s luxury properties - bringing enterprise-level expertise to island living.</p>
              <p>With extensive experience in complex systems and smart home integration across high-end commercial and residential projects, ReefTech delivers professional solutions that enhance property value and guest experiences. <span className="text-teal-600 font-semibold">Engineering background</span> and <span className="text-cyan-600 font-semibold"> high-end project experience</span> ensure your properties benefit from proven, reliable technology solutions.</p>
              <p>What sets ReefTech apart is our focus on <span className="text-lime-600 font-semibold">specialized services</span> - from smart home automation to sauna maintenance. We handle the technology challenges that give property managers peace of mind.</p>
              <p className="text-2xl font-semibold">
                <span className="bg-gradient-to-r from-teal-600 to-lime-500 bg-clip-text text-transparent">&ldquo;Work smarter, not harder - technology solutions that actually work.&rdquo;</span>
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl border border-cyan-200 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">Enterprise</div>
                <div className="text-lg text-gray-600">Experience</div>
              </div>
              <div className="bg-gradient-to-br from-lime-50 to-cyan-50 p-6 rounded-2xl border border-lime-200 text-center">
                <div className="text-3xl font-bold text-lime-600 mb-2">$5-10M</div>
                <div className="text-lg text-gray-600">Insurance</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-lime-50 p-6 rounded-2xl border border-teal-200 text-center">
                <div className="text-lg text-gray-600">Sauna Specialist</div>
              </div>
            </div>
          </div>
          <div className="text-center relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3]">
                <img src="/photos/work/IMG_6931.jpg" alt="Professional Installation Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Professional Installation</div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3]">
                <img src="/photos/work/IMG_7164.jpg" alt="Smart Home Technology" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Smart Integration</div>
              </div>
              <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl group aspect-[16/6]">
                <img src="/photos/work/IMG_6814.jpg" alt="Advanced Technology Systems" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Advanced Systems</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">⚡</div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-lime-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl animate-pulse">🔧</div>
          </div>
        </div>
      </div>
    </section>
  );
}
