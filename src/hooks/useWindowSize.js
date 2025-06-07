import { useState, useEffect } from 'react';

// Пользовательский хук для отслеживания размера окна браузера
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth });
      };
     
      window.addEventListener('resize', handleResize);
      handleResize();
     
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};
export default useWindowSize;

