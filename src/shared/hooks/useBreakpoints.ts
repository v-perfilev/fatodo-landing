import { useEffect, useState } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type WindowSize = { width: number; height: number };

const useBreakpoints = (): Breakpoint => {
  const [breakpoint, setBreakPoint] = useState<Breakpoint>('xl');
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 });

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const calcBreakpoint = () => {
    if (0 < windowSize.width && windowSize.width < 600) {
      setBreakPoint('xs');
    } else if (600 < windowSize.width && windowSize.width < 960) {
      setBreakPoint('sm');
    } else if (960 < windowSize.width && windowSize.width < 1280) {
      setBreakPoint('md');
    } else if (1280 < windowSize.width && windowSize.width < 1920) {
      setBreakPoint('lg');
    } else {
      setBreakPoint('xl');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    calcBreakpoint();
  }, [windowSize]);

  return breakpoint;
};

export default useBreakpoints;
