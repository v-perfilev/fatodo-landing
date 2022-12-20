import * as React from 'react';
import { Container, Grid, Theme, useMediaQuery } from '@mui/material';
import './index.scss';
import Bullet from '../../surfaces/bullet/Bullet';
import { SpeedIcon } from '../../icons/SpeedIcon';
import AnimateIn from '../../animations/AnimateIn';
import { PeopleIcon } from '../../icons/PeopleIcon';
import { AlarmCheckIcon } from '../../icons/AlarmCheckIcon';
import { useI18next } from 'gatsby-plugin-react-i18next';

const IndexBullets = () => {
  const { t } = useI18next();
  const isBigDevice = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={8}>
        <Grid item xs={10} sm={8} lg={4}>
          <AnimateIn direction="up" distance={10} duration={1000} delay={isBigDevice ? 50 : 50} threshold={0.5}>
            <Bullet icon={<PeopleIcon />} title={t('index.bullets.title1')} text={t('index.bullets.text1')} />
          </AnimateIn>
        </Grid>
        <Grid item xs={10} sm={8} lg={4}>
          <AnimateIn direction="up" distance={10} duration={1000} delay={isBigDevice ? 200 : 50} threshold={0.5}>
            <Bullet icon={<AlarmCheckIcon />} title={t('index.bullets.title2')} text={t('index.bullets.text2')} />
          </AnimateIn>
        </Grid>
        <Grid item xs={10} sm={8} lg={4}>
          <AnimateIn direction="up" distance={10} duration={1000} delay={isBigDevice ? 350 : 50} threshold={0.5}>
            <Bullet icon={<SpeedIcon />} title={t('index.bullets.title3')} text={t('index.bullets.text3')} />
          </AnimateIn>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndexBullets;
