import React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import './bullets.scss';
import FatodoCalendarImg from '../../images/FatodoCalendarImg';
import BulletsTitle from './BulletsTitle';
import BulletsItem from './BulletsItem';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Bullets2 = () => {
  const { t } = useI18next();

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
              <BulletsTitle
                blueText={t('index.bullets.calendar.blueTitle')}
                yellowText={t('index.bullets.calendar.yellowTitle')}
              />
              <BulletsItem>{t('index.bullets.calendar.item1')}</BulletsItem>
              <BulletsItem>{t('index.bullets.calendar.item2')}</BulletsItem>
              <BulletsItem>{t('index.bullets.calendar.item3')}</BulletsItem>
              <BulletsItem>{t('index.bullets.calendar.item4')}</BulletsItem>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Bullets2;
