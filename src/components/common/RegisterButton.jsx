import React from 'react';

const RegisterButton = ({ className }) => {
  // This is where we'll add the functionality to open a Google Form in a new tab
  const handleRegisterClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.google.com/your-form-url-here', '_blank');
  };

  return (
    <button 
      onClick={handleRegisterClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ${className || ''}`}
    >
      Register Now
    </button>
  );
};

export default RegisterButton;