import React, { CSSProperties, ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

type AnimateInProps = {
  delay?: number;
  children: ReactNode;
};

const AnimateIn = ({ delay = 0, children }: AnimateInProps) => {
  const { ref, inView } = useInView({ delay: 200, threshold: 0.2, initialInView: false, triggerOnce: true });

  const animatedStyles = useSpring({ opacity: inView ? 1 : 0, delay });
  const styles: CSSProperties = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

  return (
    <animated.div style={{ ...animatedStyles, ...styles }} ref={ref}>
      {children}
    </animated.div>
  );
};

export default AnimateIn;
