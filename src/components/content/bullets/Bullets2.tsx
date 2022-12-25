import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import './bullets.scss';
import FatodoGroupsImg from '../../images/FatodoGroupsImg';
import FatodoCalendarImg from '../../images/FatodoCalendarImg';

const Bullets2 = () => {
  return (
    <Container>
      <Box className="bullets">
        <Grid container>
          <Grid className="bullets__image" item xs={6}>
            <Box className="bullets__image__container">
              <Box className="bullets__image__bg" />
              <FatodoCalendarImg />
            </Box>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Bullets2;
