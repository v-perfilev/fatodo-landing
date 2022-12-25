import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './cards.scss';
import { AlarmCheckIcon } from '../../icons/AlarmCheckIcon';

const CardsItem3 = () => {
  return (
    <Box className="cards__item">
      <Stack>
        <Box className="cards__item__icon">
          <AlarmCheckIcon fontSize="large" />
        </Box>
        <Typography className="cards__item__title" variant="h6">
          Set priorities and do not forget about anything
        </Typography>
        <Typography className="cards__item__text" variant="body1">
          A convenient alert system with e-mail and push notifications will remind you of important dates and events.
        </Typography>
      </Stack>
    </Box>
  );
};

export default CardsItem3;
