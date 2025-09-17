import React from 'react';

const Home = () => {
  return (
    <div className="py-10">
      {/* Hero Section Placeholder */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Qiskit Fall Fest 2025</h1>
          <p className="text-xl md:text-2xl mb-8">Join the global celebration of quantum computing</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Register Now
          </button>
        </div>
      </section>
      
      {/* About Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About The Event</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            This is a placeholder for the About section. We'll add more content here as we build out the website.
          </p>
        </div>
      </section>
      
      {/* Schedule Section Placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Schedule</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            This is a placeholder for the Schedule section. We'll add the event schedule here.
          </p>
        </div>
      </section>
      
      {/* Speakers Section Placeholder */}
      <section className="py-16 bg-white">
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