import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { REGISTRATION_URL } from '../../../constants';

const BannerText = () => {
  const { t } = useI18next();

  const redirectToRegister = (): void => window.location.replace(REGISTRATION_URL);

  return (
    <Stack direction="column" spacing={5}>
      <Typography variant="h2" className="banner__text__title">
        <span className="banner__text__title--white">{t('index.banner.title1')}</span>
        &nbsp;
        <span className="banner__text__title--yellow">{t('index.banner.title2')}</span>
      </Typography>
      <Typography variant="h6" className="banner__text__subtitle">
        {t('index.banner.subtitle')}
      </Typography>
      <Box className="banner__text__button">
        <Button className="yellow-orange-button" variant="contained" size="large" onClick={redirectToRegister}>
          {t('buttons.join')}
        </Button>
      </Box>
    </Stack>
  );
};

export default BannerText;
