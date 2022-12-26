import React from 'react';
import { Box, Stack } from '@mui/material';
import './cards.scss';
import GooglePlayImg from '../../images/GooglePlayImg';
import AppleStoreImg from '../../images/AppleStoreImg';
import QrImg from '../../images/QrImg';
import { Link } from 'gatsby';

const CardsItem1 = () => {
  return (
    <Box className="cards__item">
      <Stack className="cards__item--item1" direction="row" spacing={3}>
        <Stack direction="column" spacing={2}>
          <a href="https://yandex.ru">
            <GooglePlayImg />
          </a>
          <a href="https://yandex.ru">
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
