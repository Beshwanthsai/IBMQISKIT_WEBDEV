import { useState, useEffect } from 'react';

const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateTranslateY = (factor = 0.3) => {
    return scrollY * factor;
  };

  return { scrollY, calculateTranslateY };
};

export default useParallax;