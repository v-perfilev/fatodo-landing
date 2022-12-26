import React from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import OctopusBannerImg from '../../images/OctopusBannerImg';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { REGISTRATION_URL } from '../../../constants';
import './banner.scss';

const Banner = () => {
  const { t } = useI18next();

  const redirectToRegister = (): void => window.location.replace(REGISTRATION_URL);

  return (
    <Container>
      <Box className="banner">
        <Grid container>
          <Grid item xs={6} className="banner__text">
            <Stack direction="column" spacing={3}>
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
          </Grid>
          <Grid item xs={6} className="banner__image">
            <Box className="banner__image__container">
              <OctopusBannerImg />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
