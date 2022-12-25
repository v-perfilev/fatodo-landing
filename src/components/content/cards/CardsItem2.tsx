import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './cards.scss';
import { PeopleIcon } from '../../icons/PeopleIcon';

const CardsItem2 = () => {
  return (
    <Box className="cards__item">
      <Stack>
        <Box className="cards__item__icon">
          <PeopleIcon fontSize="large" />
        </Box>
        <Typography className="cards__item__title" variant="h6">
          Like a social network but for achieving goals
        </Typography>
        <Typography className="cards__item__text" variant="body1">
          Create task lists, share them, and discuss their fulfillment in comments and chat rooms.
        </Typography>
      </Stack>
    </Box>
  );
};

export default CardsItem2;
