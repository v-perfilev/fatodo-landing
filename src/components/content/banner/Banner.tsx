import './banner.scss';

import React from 'react';
import { Box, Container, Grid, Theme, useMediaQuery } from '@mui/material';
import BannerImageBig from './BannerImageBig';
import BannerText from './BannerText';
import BannerImageSmall from './BannerImageSmall';
import AnimateIn from '../../animation/AnimateIn';

const Banner = () => {
  const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <AnimateIn>
      <Container>
        <Box className="banner">
          <Grid className="banner__container" container>
            <Grid className="banner__text" item xs={12} lg={6}>
              <BannerText />
            </Grid>
            <Grid className="banner__image" item xs={12} lg={6}>
              {isLgUp ? <BannerImageBig /> : <BannerImageSmall />}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AnimateIn>
  );
};

export default Banner;
