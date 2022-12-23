import React, { useState } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import GhostButton from '../button/GhostButton';
import Stack from '../stack/Stack';
import { LanguageIcon } from '../../icons/LanguageIcon';
import './header.scss';
import { turquoiseColor } from '../../../constants';
import Popup from '../popup/Popup';

const LanguageMenu = () => {
  const { language, languages, originalPath } = useI18next();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const anchor = (
    <GhostButton action={handleOpen}>
      <Stack>
        <LanguageIcon color={turquoiseColor} />
        {language}
      </Stack>
    </GhostButton>
  );

  const content = <div>test</div>;

  return <Popup anchor={anchor} content={content} open={isOpen} close={handleClose} />;
};

export default LanguageMenu;
