import './links.scss';

import React from 'react';
import { Box, Stack } from '@mui/material';
import GooglePlayImg from '../../images/GooglePlayImg';
import AppleStoreImg from '../../images/AppleStoreImg';
import QrImg from '../../images/QrImg';
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '../../../constants';
import AnimateIn from '../../animation/AnimateIn';

const Links = () => {
  return (
    <AnimateIn>
      <Box className="links">
        <Box className="links__container">
          <Stack className="links__stores" direction="column" spacing={2}>
            <a href={GOOGLE_PLAY_URL}>
              <GooglePlayImg />
            </a>
            <a href={APPLE_STORE_URL}>
              <AppleStoreImg />
            </a>
          </Stack>
          <Box className="links__qr">
            <QrImg />
          </Box>
        </Box>
      </Box>
    </AnimateIn>
  );
};

export default Links;
