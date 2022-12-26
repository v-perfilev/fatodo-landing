import './bullets.scss';

import React from 'react';
import { Typography } from '@mui/material';

type BulletsTitleProps = {
  blueText: string;
  yellowText: string;
};

const BulletsTitle = ({ blueText, yellowText }: BulletsTitleProps) => {
  return (
    <Typography className="bullets__title" variant="h3">
      <span className="bullets__title--blue">{blueText}</span>
      &nbsp;
      <span className="bullets__title--yellow">{yellowText}</span>
    </Typography>
  );
};

export default BulletsTitle;
