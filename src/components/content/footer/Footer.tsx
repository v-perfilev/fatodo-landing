import './footer.scss';

import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import FooterCopyright from './FooterCopyright';
import FooterStores from './FooterStores';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer__bg" />
      <Container className="footer__container">
        <Grid container spacing={3}>
          <Grid className="footer__container__item" item xs={12} md={3}>
            <FooterCopyright />
          </Grid>
          <Grid className="footer__container__item" item xs={12} md={6}>
            <FooterLinks />
          </Grid>
          <Grid className="footer__container__item" item xs={12} md={3}>
            <FooterStores />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
