import React, { ReactNode } from 'react';
import '../../styles.scss';
import Container from './container/Container';
import { AlarmCheckIcon } from '../icons/AlarmCheckIcon';
import Header from './header/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>
        <AlarmCheckIcon />
        <div style={{ width: '100%', height: '1000px', background: 'red' }} />
      </Container>
      <main>{children}</main>
    </>
  );
};

export default Layout;
