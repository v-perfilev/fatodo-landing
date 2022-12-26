import React, { useRef, useState } from 'react';
import { Button, IconButton, Menu, MenuItem, Theme, useMediaQuery } from '@mui/material';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { LanguageIcon } from '../../icons/LanguageIcon';

const HeaderLanguageSelect = () => {
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const { language, languages, originalPath } = useI18next();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<any>();

  const handleClick = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const smUpView = (
    <Button startIcon={<LanguageIcon />} onClick={handleClick}>
      {language}
    </Button>
  );

  const smDownView = (
    <IconButton color="primary" onClick={handleClick}>
      <LanguageIcon />
    </IconButton>
  );

  return (
    <>
      <div ref={ref}>{isSmUp ? smUpView : smDownView}</div>
      <Menu anchorEl={ref.current} open={isOpen} onClose={handleClose}>
        {languages.map((lng) => (
          <MenuItem key={lng}>
            <Link className="header__menu__link" to={originalPath} language={lng}>
              {lng}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HeaderLanguageSelect;
