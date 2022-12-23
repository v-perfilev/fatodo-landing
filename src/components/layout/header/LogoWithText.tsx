import React from 'react';
import { animated, useSpring } from 'react-spring';
import LogoImg from '../../images/LogoImg';
import useIsOnTop from '../../../shared/hooks/useIsOnTop';
import './header.scss';

const LogoWithText = () => {
  const isOnTop = useIsOnTop();

  const imgStyle = useSpring({ width: isOnTop ? '60px' : '50px', height: isOnTop ? '60px' : '50px' });
  const spanStyle = useSpring({ fontSize: isOnTop ? '2.7rem' : '2.3rem' });

  return (
    <div className="logo-with-text">
      <animated.div className="logo-with-text__img" style={imgStyle}>
        <LogoImg />
      </animated.div>
      <animated.span className="logo-with-text__span" style={spanStyle}>
        Fatodo
      </animated.span>
    </div>
  );
};

export default LogoWithText;
