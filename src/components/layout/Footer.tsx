import * as React from 'react';
import { Box, Container } from '@mui/material';
import './layout.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Footer = () => {
  const { t } = useI18next();

  const copyright = `© ${new Date().getFullYear()} Fatodo`;

  return (
    <Box className="footer">
      <Container className="footer__container">
        <Box className="footer__copyright">{copyright}</Box>
        {/*<Grower />*/}
        <Box className="footer__links">
          <Box className="footer__link">
            <a target="_blank" href="/data/fatodo-privacy-policy.pdf">
              {t('links.privacyPolicy')}
            </a>
          </Box>
          <Box className="footer__link">
            <a target="_blank" href="/data/fatodo-terms-and-conditions-of-use.pdf">
              {t('links.termsOfUse')}
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
