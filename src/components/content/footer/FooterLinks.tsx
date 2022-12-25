import React from 'react';
import { Stack } from '@mui/material';
import './footer.scss';
import { Link } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

const FooterLinks = () => {
  const { t } = useI18next();

  return (
    <Stack className="footer__links" direction="row" spacing={2}>
      <a target="_blank" href="/data/fatodo-privacy-policy.pdf">
        {t('links.privacyPolicy')}
      </a>
      <a target="_blank" href="/data/fatodo-terms-and-conditions-of-use.pdf">
        {t('links.termsOfUse')}
      </a>
    </Stack>
  );
};

export default FooterLinks;
