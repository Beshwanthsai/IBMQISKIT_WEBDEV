import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Qiskit Fall Fest 2025</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-200">About</a></li>
            <li><a href="#" className="hover:text-blue-200">Schedule</a></li>
            <li><a href="#" className="hover:text-blue-200">Speakers</a></li>
            <li><a href="#" className="hover:text-blue-200">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;