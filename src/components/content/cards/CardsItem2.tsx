import React from 'react';
import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { PeopleIcon } from '../../icons/PeopleIcon';
import { useI18next } from 'gatsby-plugin-react-i18next';
import AnimateIn from '../../animation/AnimateIn';

const CardsItem2 = () => {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const { t } = useI18next();

  return (
    <AnimateIn delay={isMdUp ? 200 : undefined}>
      <Box className="cards__item">
        <Stack spacing={1}>
          <Box className="cards__item__icon">
            <PeopleIcon fontSize="large" />
          </Box>
          <Typography className="cards__item__title" variant="h6">
            {t('index.cards.members.title')}
          </Typography>
          <Typography className="cards__item__text" variant="body1">
            {t('index.cards.members.text')}
          </Typography>
        </Stack>
      </Box>
    </AnimateIn>
  );
};

export default CardsItem2;
