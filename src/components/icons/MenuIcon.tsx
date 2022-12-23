import React from 'react';
import { SvgIcon, SvgIconParams } from './SvgIcon';

export const MenuIcon = (props: SvgIconParams) => (
  <SvgIcon {...props}>
    <svg viewBox="0 0 24 24" xmlns="<http://www.w3.org/2000/svg>">
      <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>
  </SvgIcon>
);
