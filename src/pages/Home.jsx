import React, { useEffect, useRef } from 'react';
// Import image with URL reference to handle spaces in filename
import fallFestBg from '../assets/2_Fall Fest_LinkedinTwitter_Extension.png';
import useParallax from '../hooks/useParallax';
import RegisterButton from '../components/common/RegisterButton';

const Home = () => {
  const { scrollY, calculateTranslateY } = useParallax();
  const heroContentRef = useRef(null);

  useEffect(() => {
    if (heroContentRef.current) {
      heroContentRef.current.style.transform = `translateY(${calculateTranslateY(0.4)}px)`;
    }
  }, [scrollY, calculateTranslateY]);

  return (
    <div className="py-0">
      {/* Hero Section with Fixed Background */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden hero-background"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div 
          ref={heroContentRef}
          className="container relative z-10 mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in drop-shadow-lg">
            Qiskit Fall Fest 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto animate-fade-in-up drop-shadow-md" style={{animationDelay: '0.3s'}}>
            Join the global celebration of quantum computing and unlock the potential of quantum technology
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <RegisterButton />
          </div>
        </div>
      </section>
      
      {/* About Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About The Event</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            This is a placeholder for the About section. We'll add more content here as we build out the website.
          </p>
        </div>
      </section>
      
      {/* Schedule Section Placeholder */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Schedule</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            This is a placeholder for the Schedule section. We'll add the event schedule here.
          </p>
        </div>
      </section>
      
      {/* Speakers Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Speakers</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            This is a placeholder for the Speakers section. We'll add speaker profiles here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;