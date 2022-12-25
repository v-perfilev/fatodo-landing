import React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import './bullets.scss';
import FatodoGroupsImg from '../../images/FatodoGroupsImg';
import BulletsTitle from './BulletsTitle';
import BulletsItem from './BulletsItem';

const Bullets1 = () => {
  return (
    <Container>
      <Box className="bullets">
        <Grid container>
          <Grid item xs={1} />
          <Grid className="bullets__container" item xs={5}>
            <Stack className="bullets__text" direction="column" spacing={5}>
              <BulletsTitle blueText={'It is time to do'} yellowText={'your best'} />
              <BulletsItem>Create task lists for yourself and plan your day as efficiently as possible</BulletsItem>
              <BulletsItem>Share tasks and do them faster together with friends and colleagues</BulletsItem>
              <BulletsItem>
                Exchange ideas in comments and messages, find effective ways to achieve your goals
              </BulletsItem>
            </Stack>
          </Grid>
          <Grid className="bullets__container" item xs={5}>
            <Box className="bullets__image">
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
