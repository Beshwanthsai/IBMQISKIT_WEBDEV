import { motion } from 'framer-motion';

interface RegisterButtonProps {
  className?: string;
  formUrl?: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
}

const RegisterButton = ({
  className = '',
  formUrl = 'https://forms.google.com/your-form-url-here', // Replace with your actual Google Form URL
  variant = 'primary',
  size = 'medium',
  label = 'Register Now',
}: RegisterButtonProps) => {
  // Handle click event
  const handleRegisterClick = () => {
    // Open Google Form in a new tab
    window.open(formUrl, '_blank');
  };

  // Determine button styles based on variant and size
  const getButtonStyles = () => {
    const baseStyles = 'font-medium rounded-md transition-all duration-300 shadow-md';
    
    const variantStyles = {
      primary: 'bg-quantum-primary text-white hover:bg-opacity-90',
      secondary: 'bg-quantum-secondary text-white hover:bg-opacity-90',
    };
    
    const sizeStyles = {
      small: 'px-4 py-1.5 text-sm',
      medium: 'px-6 py-2',
      large: 'px-8 py-3 text-lg',
    };
    
    return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  };
  
  return (
    <motion.button
      className={getButtonStyles()}
      onClick={handleRegisterClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

export default RegisterButton;