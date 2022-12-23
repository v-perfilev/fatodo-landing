import React, { ReactNode } from 'react';
import { yellowColor } from '../../constants';

export type SvgIconParams = {
  width?: number;
  height?: number;
  color?: string;
};

type SvgIconProps = SvgIconParams & {
  children: ReactNode;
};

export const SvgIcon = ({ width = 30, height = 30, color = yellowColor, children }: SvgIconProps) => (
  <div style={{ width, height, color }}>{children}</div>
);
