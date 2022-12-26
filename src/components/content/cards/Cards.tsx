import './cards.scss';

import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import CardsItem1 from './CardsItem1';
import CardsItem2 from './CardsItem2';
import CardsItem3 from './CardsItem3';

const Cards = () => {
  return (
    <Container>
      <Box className="cards">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <CardsItem1 />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardsItem2 />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardsItem3 />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cards;
