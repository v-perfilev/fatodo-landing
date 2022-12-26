import './cards.scss';

import React from 'react';
import { Box, Container, Grid, Theme, useMediaQuery } from '@mui/material';
import CardsItem1 from './CardsItem1';
import CardsItem2 from './CardsItem2';
import CardsItem3 from './CardsItem3';

const Cards = () => {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.only('md'));

  return (
    <Container>
      <Box className="cards">
        <Grid container spacing={isMdUp ? 5 : 10}>
          <Grid className="cards__container" item xs={12} md={12} lg={4}>
            <CardsItem1 />
          </Grid>
          {isMd && <Grid item md={1} />}
          <Grid className="cards__container" item xs={12} md={5} lg={4}>
            <CardsItem2 />
          </Grid>
          <Grid className="cards__container" item xs={12} md={5} lg={4}>
            <CardsItem3 />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cards;
