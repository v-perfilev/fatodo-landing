import React from 'react';
import { Box, Stack } from '@mui/material';
import './cards.scss';
import GooglePlayImg from '../../images/GooglePlayImg';
import AppleStoreImg from '../../images/AppleStoreImg';
import { Link } from 'gatsby';
import QrImg from '../../images/QrImg';

const CardsItem1 = () => {
  return (
    <Box className="cards__item">
      <Stack className="cards__item--item1" direction="row" spacing={3}>
        <Stack direction="column" spacing={2}>
          <Link to="https://yandex.ru">
            <GooglePlayImg />
          </Link>
          <Link to="https://yandex.ru">
            <AppleStoreImg />
          </Link>
        </Stack>
        <Box className="cards__item--item1__column">
          <Box className="cards__item--item1__qr">
            <Link to="https://yandex.ru">
              <QrImg />
            </Link>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardsItem1;
