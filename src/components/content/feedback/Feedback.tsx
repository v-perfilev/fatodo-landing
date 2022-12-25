import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import './feedback.scss';
import OctopusQuestionImg from '../../images/OctopusQuestionImg';

const Feedback = () => {
  return (
    <Container maxWidth="md">
      <Box className="feedback">
        <Grid container>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
        <Box className="feedback__image">
          <OctopusQuestionImg />
        </Box>
      </Box>
    </Container>
  );
};

export default Feedback;
