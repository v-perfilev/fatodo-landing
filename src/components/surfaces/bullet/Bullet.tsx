import { Box } from '@mui/material';
import * as React from 'react';
import { ReactNode } from 'react';

import './bullet.scss';

type BulletProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

const Bullet = ({ icon, title, text }: BulletProps) => {
  return (
    <Box className="bullet">
      <Box className="bullet__image">{icon}</Box>
      <h4 className="bullet__title">{title}</h4>
      <p className="bullet__text">{text}</p>
    </Box>
  );
};

export default Bullet;
