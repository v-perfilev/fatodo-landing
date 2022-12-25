import React from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import OctopusBannerImg from '../../images/OctopusBannerImg';
import './banner.scss';

const Banner = () => {
  return (
    <Container>
      <Box className="banner">
        <Grid container>
          <Grid item xs={6} className="banner__text">
            <Stack direction="column" spacing={3}>
              <Typography variant="h2" className="banner__text__title">
                <span className="banner__text__title--white">The platform that helps not to forget about</span>
                &nbsp;
                <span className="banner__text__title--yellow">important</span>
              </Typography>
              <Typography variant="h6" className="banner__text__subtitle">
                Fatodo is a free web, iOS and Android application that allows you to organize tasks and collaborate on
                them with your friends and teams
              </Typography>
              <Box className="banner__text__button">
                <Button className="yellow-orange-button" variant="contained" size="large" onClick={console.log}>
                  JOIN FOR FREE
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
