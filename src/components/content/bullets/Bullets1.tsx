import './bullets.scss';

import React from 'react';
import { Box, Container, Grid, Stack, Theme, useMediaQuery } from '@mui/material';
import FatodoGroupsImg from '../../images/FatodoGroupsImg';
import BulletsTitle from './BulletsTitle';
import BulletsItem from './BulletsItem';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Space from '../../layout/Space';
import AnimateIn from '../../animation/AnimateIn';

const Bullets1 = () => {
  const { t } = useI18next();
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Container>
      <Box className="bullets">
        <Grid container>
          <Grid item xs={0} md={1} />
          <Grid className="bullets__container" item xs={12} md={5}>
            <AnimateIn>
              <Stack className="bullets__text" direction="column" spacing={5}>
                <BulletsTitle
                  blueText={t('index.bullets.groups.blueTitle')}
                  yellowText={t('index.bullets.groups.yellowTitle')}
                />
                <BulletsItem>{t('index.bullets.groups.item1')}</BulletsItem>
                <BulletsItem>{t('index.bullets.groups.item2')}</BulletsItem>
                <BulletsItem>{t('index.bullets.groups.item3')}</BulletsItem>
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
                <FatodoGroupsImg />
              </Box>
            </AnimateIn>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Bullets1;
