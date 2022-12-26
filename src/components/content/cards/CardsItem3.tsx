import React from 'react';
import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { AlarmCheckIcon } from '../../icons/AlarmCheckIcon';
import { useI18next } from 'gatsby-plugin-react-i18next';
import AnimateIn from '../../animation/AnimateIn';

const CardsItem3 = () => {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const { t } = useI18next();

  return (
    <AnimateIn delay={isMdUp ? 350 : undefined}>
      <Box className="cards__item">
        <Stack spacing={1}>
          <Box className="cards__item__icon">
            <AlarmCheckIcon fontSize="large" />
          </Box>
          <Typography className="cards__item__title" variant="h6">
            {t('index.cards.alarm.title')}
          </Typography>
          <Typography className="cards__item__text" variant="body1">
            {t('index.cards.alarm.text')}
          </Typography>
        </Stack>
      </Box>
    </AnimateIn>
  );
};

export default CardsItem3;
