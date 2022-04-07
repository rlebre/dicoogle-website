import { useEffect, useState } from 'react';
import Up from '../icons/Up';
import styles from './scroll-top.module.scss';

export const ScrollToTheTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <button onClick={scrollToTop} className={`${isVisible ? 'opacity-100' : 'opacity-0'} ${styles.button}`}>
        <Up className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  );
};

export default ScrollToTheTop;
