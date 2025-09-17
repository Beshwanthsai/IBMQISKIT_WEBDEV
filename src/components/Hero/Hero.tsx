import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, quantumEntanglement } from '../../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background Quantum Circuit Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 24 }).map((_, index) => (
            <motion.div
              key={index}
              className="border border-quantum-primary rounded-full w-4 h-4 absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={quantumEntanglement(index)}
              initial="hidden"
              animate="show"
            />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            className="mb-6 inline-block"
            variants={fadeIn('down', 0.2)}
          >
            <span className="bg-quantum-primary/10 text-quantum-primary px-4 py-2 rounded-full font-medium">
              October 15-20, 2025
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={fadeIn('up', 0.3)}
          >
            <span className="text-quantum-primary">Qiskit</span>{' '}
            <span className="text-quantum-secondary">Fall Fest</span>{' '}
            <span className="block mt-2">2025</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8"
            variants={fadeIn('up', 0.4)}
          >
            Join the global celebration of quantum computing! A week-long event of workshops, 
            hackathons, and community activities to explore the quantum revolution.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeIn('up', 0.5)}
          >
            <motion.a
              href="#register"
              className="btn-primary text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
            
            <motion.a
              href="#about"
              className="border-2 border-quantum-secondary text-quantum-secondary font-medium px-8 py-3 rounded-md hover:bg-quantum-secondary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          <motion.div 
            className="mt-16 max-w-5xl w-full"
            variants={fadeIn('up', 0.6)}
          >
            <div className="p-6 bg-white rounded-xl shadow-xl border border-quantum-light">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-quantum-primary mb-2">25+</h3>
                  <p className="text-gray-600">Global Locations</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-quantum-primary mb-2">50+</h3>
                  <p className="text-gray-600">Workshops & Talks</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-quantum-primary mb-2">$10K+</h3>
                  <p className="text-gray-600">In Prizes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;