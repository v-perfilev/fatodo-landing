import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import './banner.scss';
import OctopusBannerImg from '../../images/OctopusBannerImg';

const Banner = () => {
  return (
    <Container>
      <Box className="banner">
        <Grid container>
          <Grid item xs={6}></Grid>
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
