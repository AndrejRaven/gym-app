import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]); // Trigger the effect when the pathname changes

  return null; // ScrollToTop component doesn't render anything
};

export default ScrollToTop;