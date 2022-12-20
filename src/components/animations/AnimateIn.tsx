import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimationDirection = 'up' | 'down' | 'left' | 'right';

type AnimateInProps = {
  children: ReactNode;
  threshold?: number;
  triggerOnce?: boolean;
  direction?: AnimationDirection;
  distance?: number;
  duration?: number;
  delay?: number;
};

const AnimateIn = ({
  children,
  threshold = 0.1,
  triggerOnce = false,
  direction = 'up',
  distance = 30,
  duration = 500,
  delay = 0,
}: AnimateInProps) => {
  const [inViewState, setInViewState] = useState<boolean>();
  const [ref, inView] = useInView({ threshold: inViewState ? 0.1 : threshold, triggerOnce });

  const transition = 'opacity, transform';
  const transitionDuration = `${duration}ms, ${duration}ms`;
  const transitionDelay = `${delay}ms, ${delay}ms`;
  const transitionTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94), cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  const opacity = inView ? 1 : 0;
  const transform = {
    up: `translateY(${inView ? 0 : -distance}px)`,
    down: `translateY(${inView ? 0 : distance}px)`,
    left: `translateX(${inView ? 0 : -distance}px)`,
    right: `translateX(${inView ? 0 : distance}px)`,
  }[direction];

  useEffect(() => {
    setInViewState(inView);
  }, [inView]);

  const style = { transition, transitionDuration, transitionDelay, transitionTimingFunction, opacity, transform };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

export default AnimateIn;
