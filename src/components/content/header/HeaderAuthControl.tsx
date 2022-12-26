import React, { useRef, useState } from 'react';
import { Button, IconButton, Menu, MenuItem, Theme, useMediaQuery } from '@mui/material';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { MenuIcon } from '../../icons/MenuIcon';
import { LOGIN_URL, REGISTRATION_URL } from '../../../constants';

const HeaderAuthControl = () => {
  const { t } = useI18next();
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<any>();

  const handleClick = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const redirectToLogin = (): void => window.location.replace(LOGIN_URL);
  const redirectToRegister = (): void => window.location.replace(REGISTRATION_URL);

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
      <IconButton color="primary" onClick={handleClick} ref={ref}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={ref.current} open={isOpen} onClose={handleClose}>
        <MenuItem className="header__menu__link" onClick={redirectToLogin}>
          {t('buttons.login')}
        </MenuItem>
        <MenuItem className="header__menu__link" onClick={redirectToRegister}>
          {t('buttons.register')}
        </MenuItem>
      </Menu>
    </>
  );

  return isSmUp ? smUpView : smDownView;
};

export default HeaderAuthControl;
