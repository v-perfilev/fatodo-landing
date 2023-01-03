import './feedback.scss';

import React from 'react';
import { Box, Container, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import OctopusQuestionImg from '../../images/OctopusQuestionImg';
import FeedbackForm from './FeedbackForm';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Feedback = () => {
  const { t } = useI18next();
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const className = isMdUp ? 'feedback feedback--big' : 'feedback feedback--small';

  return (
    <Container maxWidth="md">
      <Box className={className}>
        <Stack direction="column" spacing={5}>
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
