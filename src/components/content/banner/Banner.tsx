import './banner.scss';

import React from 'react';
import { Box, Container, Grid, Theme, useMediaQuery } from '@mui/material';
import BannerImageBig from './BannerImageBig';
import BannerText from './BannerText';
import BannerImageSmall from './BannerImageSmall';
import AnimateIn from '../../animation/AnimateIn';

const Banner = () => {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <AnimateIn>
      <Container>
        <Box className="banner">
          <Grid container>
            <Grid className="banner__text" item xs={12} md={6}>
              <BannerText />
            </Grid>
            <Grid className="banner__image" item xs={12} md={6}>
              {isMdUp ? <BannerImageBig /> : <BannerImageSmall />}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AnimateIn>
  );
};

export default Banner;
