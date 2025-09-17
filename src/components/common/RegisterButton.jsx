import React from 'react';

const RegisterButton = ({ className }) => {
  // This is where we'll add the functionality to open a Google Form in a new tab
  const handleRegisterClick = () => {
    // Google Form URL for Qiskit Fall Fest 2025 registration
    window.open('https://forms.google.com/qiskit-fall-fest-2025-registration', '_blank');
  };

  return (
    <button 
      onClick={handleRegisterClick}
      className={`bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg ${className || ''}`}
    >
      Register Now
    </button>
  );
};

export default RegisterButton;