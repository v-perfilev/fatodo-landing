import React from 'react';
import { Stack } from '@mui/material';
import './footer.scss';
import GooglePlayImg from '../../images/GooglePlayImg';
import AppleStoreImg from '../../images/AppleStoreImg';

const FooterStores = () => {
  return (
    <Stack className="footer__stores" direction="row" spacing={2}>
      <a className="footer__stores__link" href="https://yandex.ru">
        <GooglePlayImg />
      </a>
      <a className="footer__stores__link" href="https://yandex.ru">
        <AppleStoreImg />
      </a>
    </Stack>
  );
};

export default FooterStores;
