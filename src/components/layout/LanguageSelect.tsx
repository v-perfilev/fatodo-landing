import * as React from 'react';
import { useRef, useState } from 'react';
import { Menu, MenuItem, Theme, useMediaQuery } from '@mui/material';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { LanguageIcon } from '../icons/LanguageIcon';
import { Button, IconButton } from 'gatsby-theme-material-ui';

const LanguageSelect = () => {
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const { language, languages, originalPath } = useI18next();
  const ref = useRef<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const smUpView = (
    <Button className="language-select__button" startIcon={<LanguageIcon />} onClick={handleClick}>
      {language}
    </Button>
  );

  const smDownView = (
    <IconButton className="language-select__button" onClick={handleClick}>
      <LanguageIcon />
    </IconButton>
  );

  return (
    <>
      <div ref={ref}>{isSmUp ? smUpView : smDownView}</div>
      <Menu anchorEl={ref.current} open={isOpen} onClose={handleClose}>
        {languages.map((lng) => (
          <MenuItem key={lng}>
            <Link className="language-select__link" to={originalPath} language={lng}>
              {lng}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelect;
