import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import LogoImg from '../../images/LogoImg';

const FooterCopyright = () => {
  const copyright = `© ${new Date().getFullYear()} Fatodo`;

  return (
    <Stack className="footer__copyright" direction="row" spacing={1}>
      <Box className="footer__copyright__image">
        <LogoImg />
      </Box>
      <Typography className="footer__copyright__text">{copyright}</Typography>
    </Stack>
  );
};

export default FooterCopyright;
