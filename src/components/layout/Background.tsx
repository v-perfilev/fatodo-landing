import * as React from 'react';
import { Box } from '@mui/material';
import './layout.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Background = () => {
  return (
    <Box className="background">
      <StaticImage className="background__back" src="../../../static/images/background-1.jpg" alt="Fatodo background" />
      <Box className="background__top" />
    </Box>
  );
};
export default Background;
