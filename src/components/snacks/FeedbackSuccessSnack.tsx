import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import SnackTransition from './SnackTransition';
import './snacks.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

type FeedbackSuccessSnackProps = {
  open: boolean;
  close: () => void;
};

const FeedbackSuccessSnack = ({ open, close }: FeedbackSuccessSnackProps) => {
  const { t } = useI18next();

  return (
    <Snackbar
      open={open}
      onClose={close}
      autoHideDuration={6000}
      TransitionComponent={SnackTransition}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert severity="success">{t('index.feedback.snack.success')}</Alert>
    </Snackbar>
  );
};

export default FeedbackSuccessSnack;
