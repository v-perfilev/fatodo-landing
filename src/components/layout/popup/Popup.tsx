import React, { cloneElement, createRef, CSSProperties, memo, ReactElement, useEffect, useState } from 'react';
import './popup.scss';
import useWindowSize from '../../../shared/hooks/useWindowSize';
import { animated, useChain, useSpring, useSpringRef } from 'react-spring';

type PopupProps = {
  anchor: ReactElement;
  content: ReactElement;
  open: boolean;
  close: () => void;
};

type Position = { x: number; y: number };

const Popup = ({ anchor, content, open, close }: PopupProps) => {
  const windowSize = useWindowSize();
  const [contentPosition, setContentPosition] = useState<Position>({ x: 0, y: 0 });
  const anchorRef = createRef<HTMLDivElement>();
  const contentRef = createRef<HTMLDivElement>();

  const anchorWithRef = cloneElement(anchor, { ref: anchorRef });

  const positionStyle: CSSProperties = { top: contentPosition.y, left: contentPosition.x };

  const displayRef = useSpringRef();
  const displayStyle = useSpring({ display: open ? 'block' : 'none' });

  const opacityRef = useSpringRef();
  const opacityStyle = useSpring({ opacity: open ? 1 : 0 });

  useChain([opacityRef, displayRef], [0, 1], open ? 1000 : 0);

  const calcPosition = (): void => {
    if (anchorRef.current && contentRef.current && contentRef.current.clientWidth > 0) {
      const x = anchorRef.current.clientWidth / 2 - contentRef.current.clientWidth / 2;
      const y = anchorRef.current.clientHeight;
      setContentPosition({ x, y });
    }
  };

  useEffect(() => {
    calcPosition();
  }, [windowSize, content, open]);

  return (
    <div className="popup">
      {anchorWithRef}
      <animated.div className="popup__backdrop" onClick={close} style={displayStyle} />
      <animated.div className="popup__container" style={{ ...positionStyle, ...displayStyle, ...opacityStyle }}>
        <div className="popup__content" ref={contentRef}>
          <div className="popup__content__bg popup__content__bg--white" />
          <div className="popup__content__bg popup__content__bg--turquoise" />
          {content}
        </div>
      </animated.div>
    </div>
  );
};

export default memo(Popup);
