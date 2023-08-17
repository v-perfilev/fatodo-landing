import React, { useRef, useState } from 'react';
import { Button, IconButton, Menu, MenuItem, Theme, useMediaQuery } from '@mui/material';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { LanguageIcon } from '../../icons/LanguageIcon';
import { languages } from '../../../shared/i18n';

const getName = (c: string): string => {
  return languages.find((l) => l.code === c)?.name || '';
};

const getShortName = (c: string): string => {
  const name = getName(c);
  return name.length >= 2 ? name?.substr(0, 2) : '';
};

const HeaderLanguageSelect = () => {
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const { language, languages, originalPath } = useI18next();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<any>();

  const handleClick = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const smUpView = (
    <Button color="secondary" startIcon={<LanguageIcon />} onClick={handleClick}>
      {getShortName(language)}
    </Button>
  );

  const smDownView = (
    <IconButton color="secondary" onClick={handleClick}>
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
              {getName(lng)}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HeaderLanguageSelect;
