import './header.scss';

import React from 'react';
import Logo from '../../layout/logo/Logo';
import { Box, Container, Stack } from '@mui/material';
import HeaderLanguageSelect from './HeaderLanguageSelect';
import HeaderAuthControl from './HeaderAuthControl';

const Header = () => {
  return (
    <Box className="header">
      <Box className="header__bg" />
      <Container className="header__container">
        <Box className="header__toolbar">
          <Logo />
          <Stack direction="row" spacing={2}>
            <HeaderLanguageSelect />
            <HeaderAuthControl />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
