import React from 'react';
import { Slide, SlideProps } from '@mui/material';

const SnackTransition = (props: SlideProps) => {
  return <Slide {...props} direction="up" />;
};

export default SnackTransition;
