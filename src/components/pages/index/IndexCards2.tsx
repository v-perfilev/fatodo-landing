import * as React from 'react';
import './index.scss';
import Cards from '../../surfaces/cards/Cards';
import { Box, Card, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { RhombusIcon } from '../../icons/RhombusIcon';
import { useI18next } from 'gatsby-plugin-react-i18next';

const IndexCards2 = () => {
  const { t } = useI18next();

  const leftContent = (
    <Box className="cards__container">
      <Typography className="cards__title" variant="h4">
        {t('index.cards2.title')}
      </Typography>
      <List className="cards__list">
        <ListItem>
          <ListItemIcon>
            <RhombusIcon />
          </ListItemIcon>
          <ListItemText>{t('index.cards2.bullet1')}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RhombusIcon />
          </ListItemIcon>
          <ListItemText>{t('index.cards2.bullet2')}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RhombusIcon />
          </ListItemIcon>
          <ListItemText>{t('index.cards2.bullet3')}</ListItemText>
        </ListItem>
      </List>
      <Typography className="cards__text">{t('index.cards2.text')}</Typography>
    </Box>
  );

  const rightContent = (
    <Card className="cards__image-card" elevation={2}>
      <StaticImage src="../../../../static/images/screenshot_desktop.png" alt="Fatodo Screenshot" />
    </Card>
  );

  return <Cards leftContent={leftContent} rightContent={rightContent} backgroundColor="#fafafa" />;
};

export default IndexCards2;
