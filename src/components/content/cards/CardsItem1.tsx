import './cards.scss';

import React from 'react';
import { Box, Stack } from '@mui/material';
import GooglePlayImg from '../../images/GooglePlayImg';
import AppleStoreImg from '../../images/AppleStoreImg';
import QrImg from '../../images/QrImg';
import { Link } from 'gatsby';
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '../../../constants';

const CardsItem1 = () => {
  return (
    <Box className="cards__item">
      <Stack className="cards__item--item1" direction="row" spacing={3}>
        <Stack direction="column" spacing={2}>
          <a href={GOOGLE_PLAY_URL}>
            <GooglePlayImg />
          </a>
          <a href={APPLE_STORE_URL}>
            <AppleStoreImg />
          </a>
        </Stack>
        <Box className="cards__item--item1__column">
          <Box className="cards__item--item1__qr">
            <Link to="/app-store-detector">
              <QrImg />
            </Link>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardsItem1;
