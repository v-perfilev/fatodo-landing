import React, { createRef, ForwardedRef, forwardRef, ReactNode, useEffect, useMemo } from 'react';
import { RefUtils } from '../../../shared/utils/ref.utils';
import './button.scss';

type SolidButtonProps = {
  action: () => void;
  size?: 'md' | 'lg';
  color?: 'turquoise' | 'yellow';
  children: ReactNode;
};

const SolidButton = forwardRef(
  ({ action, size = 'md', color = 'turquoise', children }: SolidButtonProps, ref: ForwardedRef<HTMLDivElement>) => {
    const button = createRef<HTMLDivElement>();

    const buttonClassName = useMemo<string>(() => {
      const arr = ['solid-button'];

      if (size === 'md') {
        arr.push('solid-button--md');
      } else if (size === 'lg') {
        arr.push('solid-button--lg');
      }

      if (color === 'turquoise') {
        arr.push('solid-button--turquoise-blue');
      } else if (color === 'yellow') {
        arr.push('solid-button--yellow-orange');
      }

      return arr.join(' ');
    }, [size, color]);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.offsetX;
      const y = e.offsetY;
      button.current?.style.setProperty('--mouse-x', x + 'px');
      button.current?.style.setProperty('--mouse-y', y + 'px');
    };

    useEffect(() => {
      button.current?.addEventListener('mousemove', handleMouseMove);
    }, []);

    return (
      <div className={buttonClassName} onClick={action} ref={RefUtils.mergeRefs(button, ref)}>
        {children}
      </div>
    );
  }
);

export default SolidButton;
