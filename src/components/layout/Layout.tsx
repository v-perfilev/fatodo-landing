import React, { ReactNode } from 'react';
import Header from '../content/header/Header';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../shared/theme';
import Footer from '../content/footer/Footer';
import '../../styles.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
