import React from 'react';
import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { AlarmCheckIcon } from '../../icons/AlarmCheckIcon';
import { useI18next } from 'gatsby-plugin-react-i18next';
import AnimateIn from '../../animation/AnimateIn';

const CardsItem2 = () => {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const { t } = useI18next();

  const cardsItemClassName = isMdUp ? 'cards__item cards__item--big' : 'cards__item cards__item--small';

  return (
    <AnimateIn delay={isMdUp ? 150 : undefined}>
      <Box className={cardsItemClassName}>
        <Stack spacing={3}>
          <Box className="cards__item__icon">
            <Box className="cards__item__icon__bg" />
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

export default CardsItem2;
