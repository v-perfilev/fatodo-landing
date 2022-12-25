import React, { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './bullets.scss';

type BulletsItemProps = {
  children: ReactNode;
};

const BulletsItem = ({ children }: BulletsItemProps) => {
  return (
    <Stack className="bullets__item" direction="row" spacing={3}>
      <Box className="bullets__item__dot" />
      <Typography className="bullets__item__text" variant="body1">
        {children}
      </Typography>
    </Stack>
  );
};

export default BulletsItem;
