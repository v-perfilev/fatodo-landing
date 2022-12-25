import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import FooterCopyright from './FooterCopyright';
import FooterStores from './FooterStores';
import FooterLinks from './FooterLinks';
import './footer.scss';

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer__bg" />
      <Container className="footer__container">
        <Stack className="footer__container__stack" direction="row" spacing={2}>
          <FooterCopyright />
          <FooterLinks />
          <FooterStores />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
