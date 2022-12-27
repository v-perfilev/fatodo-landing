import React from 'react';
import { Slide, SlideProps } from '@mui/material';

const SnackTransition = (props: SlideProps) => {
  return <Slide direction="up" {...props} />;
};

export default SnackTransition;
