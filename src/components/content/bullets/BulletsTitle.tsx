import React from 'react';
import { Typography } from '@mui/material';

type BulletsTitleProps = {
  blueText: string;
  yellowText: string;
};

const BulletsTitle = ({ blueText, yellowText }: BulletsTitleProps) => {
  return (
    <Typography className="bullets__title" variant="h3">
      {blueText}&nbsp;
      <b className="bullets__title--yellow">{yellowText}</b>
    </Typography>
  );
};

export default BulletsTitle;
