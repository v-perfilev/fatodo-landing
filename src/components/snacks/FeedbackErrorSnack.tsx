import './snacks.scss';

import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import SnackTransition from './SnackTransition';
import { useI18next } from 'gatsby-plugin-react-i18next';

type FeedbackErrorSnackProps = {
  open: boolean;
  close: () => void;
};

const FeedbackErrorSnack = ({ open, close }: FeedbackErrorSnackProps) => {
  const { t } = useI18next();

  return (
    <Snackbar
      open={open}
      onClose={close}
      autoHideDuration={6000}
      TransitionComponent={SnackTransition}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert icon={false} variant="filled" severity="error">
        {t('index.feedback.snack.error')}
      </Alert>
    </Snackbar>
  );
};

export default FeedbackErrorSnack;
