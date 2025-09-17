import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Qiskit Fall Fest 2025</h3>
            <p className="text-gray-300">
              A global quantum computing event hosted by IBM Quantum and local student communities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Schedule</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Speakers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Register</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <p className="text-gray-300">Email: info@qiskitfallfest.org</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Qiskit Fall Fest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;