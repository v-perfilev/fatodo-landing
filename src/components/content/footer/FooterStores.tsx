import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './footer.scss';
import LogoImg from '../../images/LogoImg';
import { Link } from 'gatsby';
import GooglePlayImg from '../../images/GooglePlayImg';
import AppStoreImg from '../../images/AppStoreImg';

const FooterStores = () => {
  return (
    <Stack className="footer__stores" direction="row" spacing={2}>
      <Link className="footer__stores__link" to="https://yandex.ru">
        <GooglePlayImg />
      </Link>
      <Link className="footer__stores__link" to="https://yandex.ru">
        <AppStoreImg />
      </Link>
    </Stack>
  );
};

export default FooterStores;
