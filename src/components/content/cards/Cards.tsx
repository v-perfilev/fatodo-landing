import './cards.scss';

import React from 'react';
import { Box, Container, Grid, Theme, useMediaQuery } from '@mui/material';
import Links from '../links/Links';
import CardsItem1 from './CardsItem1';
import CardsItem2 from './CardsItem2';

const Cards = () => {
  const isLgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <Container>
      <Box className="cards">
        <Grid container spacing={10}>
          {isLgUp && <Grid item lg={1} />}
          <Grid className="cards__container" item xs={12} md={12} lg={5}>
            <CardsItem1 />
          </Grid>
          <Grid className="cards__container" item xs={12} md={12} lg={5}>
            <CardsItem2 />
          </Grid>
          {isLgUp && <Grid item lg={1} />}
        </Grid>
      </Box>
    </Container>
  );
};

export default Cards;
