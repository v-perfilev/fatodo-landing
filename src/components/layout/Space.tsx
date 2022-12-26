import React, { CSSProperties } from 'react';
import { Box } from '@mui/material';

type SpaceProps = {
  height: number;
};

const Space = ({ height }: SpaceProps) => {
  const style: CSSProperties = { height };

  return <Box style={style} />;
};

export default Space;
