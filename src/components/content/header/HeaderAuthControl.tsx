import React, { createRef, useState } from 'react';
import { Button, IconButton, Menu, MenuItem, Theme, useMediaQuery } from '@mui/material';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { MenuIcon } from '../../icons/MenuIcon';

const HeaderAuthControl = () => {
  const { t } = useI18next();
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = createRef<HTMLButtonElement>();

  const handleClick = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const redirectToLogin = (): void => window.location.replace('https://app.fatodo.app/login');
  const redirectToRegister = (): void => window.location.replace('https://app.fatodo.app/registration');

  const smUpView = (
    <>
      <Button className="turquoise-blue-button" variant="contained" onClick={redirectToLogin}>
        {t('buttons.login')}
      </Button>
      <Button className="turquoise-blue-button" variant="contained" onClick={redirectToRegister}>
        {t('buttons.register')}
      </Button>
    </>
  );

  const smDownView = (
    <>
      <IconButton ref={ref} onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={ref.current} open={isOpen} onClose={handleClose}>
        <MenuItem onClick={redirectToLogin}>{t('buttons.login')}</MenuItem>
        <MenuItem onClick={redirectToRegister}>{t('buttons.register')}</MenuItem>
      </Menu>
    </>
  );

  return isSmUp ? smUpView : smDownView;
};

export default HeaderAuthControl;
