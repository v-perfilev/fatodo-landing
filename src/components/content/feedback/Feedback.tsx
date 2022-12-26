import './feedback.scss';

import React from 'react';
import { Box, Container, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import OctopusQuestionImg from '../../images/OctopusQuestionImg';
import FeedbackForm from './FeedbackForm';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Feedback = () => {
  const { t } = useI18next();
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Container maxWidth="md">
      <Box className="feedback">
        <Stack direction="column" spacing={2}>
          <Typography className="feedback__title" variant="h6">
            {t('index.feedback.title')}
          </Typography>
          <Typography className="feedback__subtitle" variant="body1">
            {t('index.feedback.subtitle')}
          </Typography>
          <FeedbackForm />
        </Stack>
        {isSmUp && (
          <Box className="feedback__image">
            <OctopusQuestionImg />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Feedback;
