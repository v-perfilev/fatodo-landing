import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import './bullets.scss';
import FatodoGroupsImg from '../../images/FatodoGroupsImg';

const Bullets1 = () => {
  return (
    <Container>
      <Box className="bullets">
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid className="bullets__image" item xs={6}>
            <Box className="bullets__image__container">
              <Box className="bullets__image__bg" />
              <FatodoGroupsImg />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Bullets1;
