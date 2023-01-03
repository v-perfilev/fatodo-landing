import React, { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';

type DescriptionItemProps = {
  children: ReactNode;
};

const DescriptionItem = ({ children }: DescriptionItemProps) => {
  return (
    <Stack className="description__item" direction="row" spacing={3}>
      <Box className="description__item__dot" />
      <Typography className="description__item__text" variant="body1">
        {children}
      </Typography>
    </Stack>
  );
};

export default DescriptionItem;
