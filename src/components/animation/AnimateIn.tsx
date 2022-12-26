import React, { ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

type AnimateInProps = {
  delay?: number;
  threshold?: number;
  children: ReactNode;
};

const AnimateIn = ({ delay = 0, threshold = 0.8, children }: AnimateInProps) => {
  const { ref, inView } = useInView({ delay: 200, threshold, initialInView: false, triggerOnce: true });

  const style = useSpring({ opacity: inView ? 1 : 0, delay });

  return (
    <animated.div style={style} ref={ref}>
      {children}
    </animated.div>
  );
};

export default AnimateIn;
