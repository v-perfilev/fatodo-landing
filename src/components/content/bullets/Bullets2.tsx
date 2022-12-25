import React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import './bullets.scss';
import FatodoCalendarImg from '../../images/FatodoCalendarImg';
import BulletsTitle from './BulletsTitle';
import BulletsItem from './BulletsItem';

const Bullets2 = () => {
  return (
    <Container>
      <Box className="bullets">
        <Grid container>
          <Grid item xs={1} />
          <Grid className="bullets__container" item xs={5}>
            <Box className="bullets__image">
              <Box className="bullets__image__bg" />
              <FatodoCalendarImg />
            </Box>
          </Grid>
          <Grid className="bullets__container" item xs={5}>
            <Stack className="bullets__text" direction="column" spacing={5}>
              <BulletsTitle blueText={'Easy and'} yellowText={'understandable'} />
              <BulletsItem>It was never so easily to handle task lists</BulletsItem>
              <BulletsItem>Detish tasks in priority</BulletsItem>
              <BulletsItem>Control the execution using the reminder system</BulletsItem>
              <BulletsItem>The most important will always remain before your eyes</BulletsItem>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Bullets2;
