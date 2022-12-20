import * as React from 'react';
import { Link } from 'gatsby';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import './layout.scss';
import Logo from '../logo/Logo';
import LanguageSelect from './LanguageSelect';
import AnimateIn from '../animations/AnimateIn';
import AuthControl from './AuthControl';
import Grower from '../surfaces/grower/Grower';

const Header = () => {
  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <Container>
        <AnimateIn direction="up">
          <Toolbar className="header__toolbar" disableGutters>
            <Link to="/">
              <Logo withName />
            </Link>
            <Grower />
            <Box className="header__buttons">
              <LanguageSelect />
              <AuthControl />
            </Box>
          </Toolbar>
        </AnimateIn>
      </Container>
    </AppBar>
  );
};

export default Header;
