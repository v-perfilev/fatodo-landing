import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import './feedback.scss';
import OctopusQuestionImg from '../../images/OctopusQuestionImg';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
  return (
    <Container maxWidth="md">
      <Box className="feedback">
        <Stack direction="column" spacing={2}>
          <Typography className="feedback__title" variant="h6">
            Feedback Form
          </Typography>
          <Typography className="feedback__subtitle" variant="body1">
            We would love to hear your thoughts, suggestions or problems with anything so we can improve!
          </Typography>
          <FeedbackForm />
        </Stack>
        <Box className="feedback__image">
          <OctopusQuestionImg />
        </Box>
      </Box>
    </Container>
  );
};

export default Feedback;
