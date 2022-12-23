import React, { ReactNode, useMemo } from 'react';
import './container.scss';

type ContainerProps = {
  maxWidth?: 'sm' | 'md' | 'lg';
  children: ReactNode;
};

const Container = ({ maxWidth = 'lg', children }: ContainerProps) => {
  const containerClassName = useMemo<string>(() => {
    const arr = ['container__container'];

    if (maxWidth === 'sm') {
      arr.push('container__container--sm');
    } else if (maxWidth === 'md') {
      arr.push('container__container--md');
    } else if (maxWidth === 'lg') {
      arr.push('container__container--lg');
    }

    return arr.join(' ');
  }, [maxWidth]);

  return (
    <div className="container__parent">
      <div className={containerClassName}>
        <div className="container__content">{children}</div>
      </div>
    </div>
  );
};

export default Container;
