import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { PeopleIcon } from '../../icons/PeopleIcon';
import { useI18next } from 'gatsby-plugin-react-i18next';

const CardsItem2 = () => {
  const { t } = useI18next();

  return (
    <Box className="cards__item">
      <Stack>
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
  );
};

export default CardsItem2;
