import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box } from '@mui/material';
import './logo.scss';

type LogoProps = {
  withName?: boolean;
};

const Logo = ({ withName }: LogoProps) => {
  return (
    <Box className="logo">
      <StaticImage className="logo__image" src="../../../static/images/logo.png" alt="Fatodo logo" />
      {withName && <span className="logo__name">Fatodo</span>}
    </Box>
  );
};

export default Logo;
