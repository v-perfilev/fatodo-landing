import { useEffect, useState } from 'react';

const useIsOnTop = (): boolean => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  const listenToScroll = (): void => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setIsOnTop(winScroll === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return isOnTop;
};

export default useIsOnTop;
