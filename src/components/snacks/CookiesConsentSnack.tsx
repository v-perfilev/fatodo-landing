import './snacks.scss';

import React, { useEffect, useState } from 'react';
import { Box, Snackbar, Stack, Typography } from '@mui/material';
import { Button } from 'gatsby-theme-material-ui';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Cookie from 'js-cookie';
import SnackTransition from './SnackTransition';

const CookiesConsentSnack = () => {
  const { t } = useI18next();
  const [show, setShow] = useState<boolean>(false);

  const accept = (): void => {
    Cookie.set('consent', 'true', { sameSite: 'strict', expires: 365 });
    setShow(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(Cookie.get('consent') === undefined);
    }, 1000);
  }, []);

  return (
    <Snackbar
      open={show}
      TransitionComponent={SnackTransition}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Box className="cookies-consent">
        <Stack direction="column" spacing={2}>
          <Typography className="cookies-consent__title" variant="body2">
            {t('index.cookies-consent.title')}
          </Typography>
          <Box className="cookies-consent__buttons">
            <Button className="yellow-orange-button" variant="contained" onClick={accept}>
              {t('index.cookies-consent.button')}
            </Button>
          </Box>
        </Stack>
      </Box>
    </Snackbar>
  );
};

export default CookiesConsentSnack;
