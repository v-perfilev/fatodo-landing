import React from 'react';
import { Box } from '@mui/material';
import OctopusBannerImg from '../../images/OctopusBannerImg';

const BannerImageBig = () => {
  return (
    <Box className="banner__image__container--big">
      <Box>
        <OctopusBannerImg />
      </Box>
    </Box>
  );
};

export default BannerImageBig;
