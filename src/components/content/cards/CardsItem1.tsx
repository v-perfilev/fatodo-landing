import React from 'react';
import { Box, Stack, Theme, useMediaQuery } from '@mui/material';
import GooglePlayImg from '../../images/GooglePlayImg';
import AppleStoreImg from '../../images/AppleStoreImg';
import QrImg from '../../images/QrImg';
import { Link } from 'gatsby';
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '../../../constants';
import AnimateIn from '../../animation/AnimateIn';

const CardsItem1 = () => {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <AnimateIn delay={isMdUp ? 50 : undefined}>
      <Box className="cards__item">
        <Stack className="cards__item--links" direction="row" spacing={3}>
          <Stack className="cards__item--links__stores" direction="column" spacing={2}>
            <a href={GOOGLE_PLAY_URL}>
              <GooglePlayImg />
            </a>
            <a href={APPLE_STORE_URL}>
              <AppleStoreImg />
            </a>
          </Stack>
          <Box className="cards__item--links__qr">
            <Box>
              <Link to="/app-store-detector">
                <QrImg />
              </Link>
            </Box>
          </Box>
        </Stack>
      </Box>
    </AnimateIn>
  );
};

export default CardsItem1;
