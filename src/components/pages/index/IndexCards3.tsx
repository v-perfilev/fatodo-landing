import * as React from 'react';
import './index.scss';
import Cards from '../../surfaces/cards/Cards';
import { Box, Card, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';

const IndexCards3 = () => {
  const { t } = useI18next();

  const leftContent = (
    <Card className="cards__image-card" elevation={2}>
      <StaticImage src="../../../../static/images/screenshot_desktop.png" alt="Fatodo Screenshot" />
    </Card>
  );

  const rightContent = (
    <Box className="cards__container">
      <Typography className="cards__title" variant="h4">
        {t('index.cards3.title')}
      </Typography>
      <Typography className="cards__text">{t('index.cards3.text')}</Typography>
    </Box>
  );

  return <Cards leftContent={leftContent} rightContent={rightContent} />;
};

export default IndexCards3;
