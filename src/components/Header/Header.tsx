import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { fadeIn } from '../../utils/animations';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          initial="hidden"
          animate="show"
          variants={fadeIn('right', 0.2)}
        >
          <a href="#home" className="flex items-center">
            <span className="text-quantum-primary font-bold text-2xl">Qiskit</span>
            <span className="text-quantum-secondary font-bold text-2xl ml-1">Fall Fest</span>
            <span className="text-quantum-dark font-medium ml-1">2025</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-6"
          initial="hidden"
          animate="show"
          variants={fadeIn('left', 0.3)}
        >
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className={`font-medium transition-colors duration-300 hover:text-quantum-primary ${
                isScrolled ? 'text-quantum-dark' : 'text-quantum-dark'
              }`}
            >
              {item.label}
            </a>
          ))}
          <motion.a
            href="#register"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.div 
          className="md:hidden"
          initial="hidden"
          animate="show"
          variants={fadeIn('left', 0.3)}
        >
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-quantum-dark p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="font-medium text-quantum-dark py-2 hover:text-quantum-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#register"
              className="btn-primary text-center w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;