import * as React from 'react';
import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Box } from '@mui/material';

const NotFoundPage = () => {
  useEffect(() => {
    navigate('/').then();
  }, []);
  return <Box />;
};

export default NotFoundPage;
