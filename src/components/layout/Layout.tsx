import * as React from 'react';
import { ReactNode } from 'react';

import '../../styles.scss';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '@mui/material';
import { yellowTheme } from '../../shared/theme';
import Background from './Background';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={yellowTheme}>
      <Background />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
