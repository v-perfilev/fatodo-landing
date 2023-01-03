import './description.scss';

import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import DescriptionItem from './DescriptionItem';
import AnimateIn from '../../animation/AnimateIn';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Description = () => {
  const { t } = useI18next();

  return (
    <AnimateIn>
      <Container maxWidth="md">
        <Stack direction="column" spacing={4}>
          <Typography className="description description--turquoise" variant="body1">
            {t('index.description.greeting')}
          </Typography>
          <Typography className="description" variant="body1">
            {t('index.description.paragraph1')}
          </Typography>
          <Stack direction="column" spacing={3}>
            <DescriptionItem>{t('index.description.bullet1')}</DescriptionItem>
            <DescriptionItem>{t('index.description.bullet2')}</DescriptionItem>
            <DescriptionItem>{t('index.description.bullet3')}</DescriptionItem>
          </Stack>
          <Typography className="description" variant="body1">
            {t('index.description.paragraph2')}
          </Typography>
        </Stack>
      </Container>
    </AnimateIn>
  );
};

export default Description;
