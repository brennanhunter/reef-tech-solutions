'use client';
import { motion } from 'framer-motion';
import { Zap, Wifi, Shield, Settings, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white">
        {/* Animated SVG Waves */}
        <svg 
          className="absolute bottom-0 w-full"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-blue-600 opacity-15" 
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-blue-500 opacity-25" 
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-blue-400 opacity-40" 
          ></path>
        </svg>
      </div>

      {/* Floating Tech Icons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10 overflow-hidden"
      >
        <TechIcon icon={<Zap className="w-8 h-8" />} x="10%" y="20%" delay={0.1} />
        <TechIcon icon={<Wifi className="w-8 h-8" />} x="75%" y="30%" delay={0.3} />
        <TechIcon icon={<Shield className="w-8 h-8" />} x="25%" y="50%" delay={0.5} />
        <TechIcon icon={<Settings className="w-8 h-8" />} x="85%" y="70%" delay={0.7} />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                Smarter Island Living
              </span><br />
              With Tech That Works
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              ReefTech brings Silicon Valley innovation to Hawaiian homes and resorts. 
              No mainland headaches - just reliable, island-proof technology installed 
              by your local tech rebels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/services"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-medium text-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </motion.a>
              
              <motion.a
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-100 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-8 h-8 text-blue-500 animate-bounce" />
      </motion.div>
    </section>
  );
}

// Tech Icon Component
function TechIcon({ icon, x, y, delay }: { 
  icon: React.ReactNode, 
  x: string, 
  y: string, 
  delay: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ 
        delay,
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className="absolute text-blue-400/30"
      style={{ left: x, top: y }}
    >
      {icon}
    </motion.div>
  );
}