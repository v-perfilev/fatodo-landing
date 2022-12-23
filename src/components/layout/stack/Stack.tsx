import React, { ReactNode, useMemo } from 'react';
import './stack.scss';

type StackProps = {
  direction?: 'row' | 'column';
  spacing?: 'sm' | 'md' | 'lg';
  children: ReactNode;
};

const Stack = ({ direction = 'row', spacing = 'sm', children }: StackProps) => {
  const stackClassName = useMemo<string>(() => {
    const arr = ['stack'];

    if (direction === 'row') {
      arr.push('stack--row');
    } else if (direction === 'column') {
      arr.push('stack--column');
    }

    if (spacing === 'sm') {
      arr.push('stack--sm');
    } else if (spacing === 'md') {
      arr.push('stack--md');
    } else if (spacing === 'lg') {
      arr.push('stack--lg');
    }

    return arr.join(' ');
  }, [spacing, direction]);

  return <div className={stackClassName}>{children}</div>;
};

export default Stack;
