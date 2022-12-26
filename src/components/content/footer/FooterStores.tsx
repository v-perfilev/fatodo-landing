import React from 'react';
import { Stack } from '@mui/material';
import GooglePlayImg from '../../images/GooglePlayImg';
import AppleStoreImg from '../../images/AppleStoreImg';
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '../../../constants';

const FooterStores = () => {
  return (
    <Stack className="footer__stores" direction="row" spacing={2}>
      <a className="footer__stores__link" href={GOOGLE_PLAY_URL}>
        <GooglePlayImg />
      </a>
      <a className="footer__stores__link" href={APPLE_STORE_URL}>
        <AppleStoreImg />
      </a>
    </Stack>
  );
};

export default FooterStores;
