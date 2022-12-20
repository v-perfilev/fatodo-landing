import * as React from 'react';
import { useRef, useState } from 'react';
import { Button, Menu, MenuItem, Theme, useMediaQuery } from '@mui/material';
import { MenuIcon } from '../icons/MenuIcon';
import { IconButton } from 'gatsby-theme-material-ui';
import { useI18next } from 'gatsby-plugin-react-i18next';

const AuthControl = () => {
  const { t } = useI18next();
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const ref = useRef<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const redirectToLogin = (): void => {
    window.location.replace('https://app.fatodo.app/login');
  };
  const redirectToRegister = (): void => {
    window.location.replace('https://app.fatodo.app/registration');
  };

  const smUpView = (
    <>
      <Button variant="contained" color="secondary" onClick={redirectToLogin}>
        {t('buttons.login')}
      </Button>
      <Button variant="contained" color="secondary" onClick={redirectToRegister}>
        {t('buttons.register')}
      </Button>
    </>
  );

  const smDownView = (
    <>
      <IconButton className="auth-control__button" ref={ref} onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={ref.current} open={isOpen} onClose={handleClose}>
        <MenuItem className="auth-control__link" onClick={redirectToLogin}>
          {t('buttons.login')}
        </MenuItem>
        <MenuItem className="auth-control__link" onClick={redirectToRegister}>
          {t('buttons.register')}
        </MenuItem>
      </Menu>
    </>
  );

  return isSmUp ? smUpView : smDownView;
};

export default AuthControl;
