import React, { createRef, ForwardedRef, forwardRef, ReactNode, useEffect } from 'react';
import { RefUtils } from '../../../shared/utils/ref.utils';
import './button.scss';

type SolidButtonProps = {
  action: () => void;
  children: ReactNode;
};

const SolidButton = forwardRef(({ action, children }: SolidButtonProps, ref: ForwardedRef<HTMLDivElement>) => {
  const button = createRef<HTMLDivElement>();

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
    <div className="ghost-button" onClick={action} ref={RefUtils.mergeRefs(button, ref)}>
      {children}
    </div>
  );
});

export default SolidButton;
