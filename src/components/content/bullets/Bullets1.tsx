import './bullets.scss';

import React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import FatodoGroupsImg from '../../images/FatodoGroupsImg';
import BulletsTitle from './BulletsTitle';
import BulletsItem from './BulletsItem';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Bullets1 = () => {
  const { t } = useI18next();

  return (
    <Container>
      <Box className="bullets">
        <Grid container>
          <Grid item xs={1} />
          <Grid className="bullets__container" item xs={5}>
            <Stack className="bullets__text" direction="column" spacing={5}>
              <BulletsTitle
                blueText={t('index.bullets.groups.blueTitle')}
                yellowText={t('index.bullets.groups.yellowTitle')}
              />
              <BulletsItem>{t('index.bullets.groups.item1')}</BulletsItem>
              <BulletsItem>{t('index.bullets.groups.item2')}</BulletsItem>
              <BulletsItem>{t('index.bullets.groups.item3')}</BulletsItem>
            </Stack>
          </Grid>
          <Grid className="bullets__container" item xs={5}>
            <Box className="bullets__image">
              <Box className="bullets__image__bg" />
              <FatodoGroupsImg />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Bullets1;
