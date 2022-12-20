import * as React from 'react';
import Cards from '../../surfaces/cards/Cards';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Card, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { RhombusIcon } from '../../icons/RhombusIcon';
import './index.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

const IndexCards1 = () => {
  const { t } = useI18next();

  const leftContent = (
    <Card className="cards__image-card" elevation={2}>
      <StaticImage src="../../../../static/images/screenshot_desktop.png" alt="Fatodo Screenshot" />
    </Card>
  );

  const rightContent = (
    <Box className="cards__container">
      <Typography className="cards__title" variant="h4">
        {t('index.cards1.title')}
      </Typography>
      <List className="cards__list">
        <ListItem>
          <ListItemIcon>
            <RhombusIcon />
          </ListItemIcon>
          <ListItemText>{t('index.cards1.bullet1')}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RhombusIcon />
          </ListItemIcon>
          <ListItemText>{t('index.cards1.bullet2')}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RhombusIcon />
          </ListItemIcon>
          <ListItemText>{t('index.cards1.bullet3')}</ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return <Cards leftContent={leftContent} rightContent={rightContent} />;
};

export default IndexCards1;
