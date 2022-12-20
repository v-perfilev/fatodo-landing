import { Box } from '@mui/material';
import * as React from 'react';

type SpacerProps = {
  height?: number;
};

const Spacer = ({ height = 100 }: SpacerProps) => {
  const style = { height };
  return <Box style={style} />;
};

export default Spacer;
