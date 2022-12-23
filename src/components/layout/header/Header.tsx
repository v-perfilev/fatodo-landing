import React from 'react';
import Container from '../container/Container';
import LogoWithText from './LogoWithText';
import SolidButton from '../button/SolidButton';
import './header.scss';
import Stack from '../stack/Stack';
import LanguageMenu from './LanguageMenu';

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header__container">
          <div className="header__logo">
            <div className="header__logo__content">
              <LogoWithText />
            </div>
          </div>
          <div className="header__buttons">
            <Stack spacing="md">
              <LanguageMenu />
              <SolidButton action={console.log}>Log in</SolidButton>
              <SolidButton action={console.log}>Sign up</SolidButton>
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
