import React from 'react';
import { Stack, Theme, useMediaQuery } from '@mui/material';
import GooglePlayImg from '../../images/GooglePlayImg';
import AppleStoreImg from '../../images/AppleStoreImg';
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '../../../constants';

const FooterStores = () => {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Stack className="footer__stores" direction={isMdUp ? 'column' : 'row'} spacing={3}>
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
