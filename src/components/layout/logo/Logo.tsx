import React from 'react';
import { animated, useSpring } from 'react-spring';
import LogoImg from '../../images/LogoImg';
import useIsOnTop from '../../../shared/hooks/useIsOnTop';
import { Link } from 'gatsby';
import { Stack } from '@mui/material';
import './logo.scss';

const Logo = () => {
  const isOnTop = useIsOnTop();

  const imgStyle = useSpring({ width: isOnTop ? '60px' : '50px', height: isOnTop ? '60px' : '50px' });
  const spanStyle = useSpring({ fontSize: isOnTop ? '2.7rem' : '2.3rem' });

  return (
    <Link className="logo" to="/">
      <Stack className="logo__stack" direction="row" spacing={1}>
        <animated.div style={imgStyle}>
          <LogoImg />
        </animated.div>
        <animated.span className="logo__span" style={spanStyle}>
          Fatodo
        </animated.span>
      </Stack>
    </Link>
  );
};

export default Logo;
