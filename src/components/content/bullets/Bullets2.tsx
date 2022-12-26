import './bullets.scss';

import React from 'react';
import { Box, Container, Grid, Stack, Theme, useMediaQuery } from '@mui/material';
import FatodoCalendarImg from '../../images/FatodoCalendarImg';
import BulletsTitle from './BulletsTitle';
import BulletsItem from './BulletsItem';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Space from '../../layout/Space';
import AnimateIn from '../../animation/AnimateIn';

const Bullets2 = () => {
  const { t } = useI18next();
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <AnimateIn>
      <Container>
        <Box className="bullets">
          <Grid container direction="row-reverse">
            <Grid item md={1} />
            <Grid className="bullets__container" item xs={12} md={5}>
              <AnimateIn>
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
              </AnimateIn>
            </Grid>
            {!isMdUp && (
              <Grid item xs={12}>
                <Space height={50} />
              </Grid>
            )}
            <Grid className="bullets__container" item xs={12} md={5}>
              <AnimateIn>
                <Box className="bullets__image">
                  <Box className="bullets__image__bg" />
                  <FatodoCalendarImg />
                </Box>
              </AnimateIn>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AnimateIn>
  );
};

export default Bullets2;
