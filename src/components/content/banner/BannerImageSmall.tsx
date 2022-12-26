import React, { CSSProperties } from 'react';
import { Box, Theme, useMediaQuery } from '@mui/material';
import OctopusBannerImg from '../../images/OctopusBannerImg';

const BannerImageSmall = () => {
  return (
    <Box className="banner__image__container--small">
      <OctopusBannerImg />
    </Box>
  );
};

export default BannerImageSmall;
