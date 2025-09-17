import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <h1 className="text-2xl font-bold">Qiskit Fall Fest 2025</h1>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Schedule</a></li>
            <li><a href="#" className="hover:text-gray-200">Speakers</a></li>
            <li><a href="#" className="hover:text-gray-200">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;