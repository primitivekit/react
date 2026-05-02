import React from 'react';
import type { StackProps } from './Stack.types';
import './Stack.css';

const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  align = 'stretch',
  justify = 'start',
  gap = '1rem',
  wrap = false,
  children,
  className = '',
  style = {},
  ...props
}) => {
  const stackClasses = [
    'stack',
    `stack--${direction}`,
    `stack--align-${align}`,
    `stack--justify-${justify}`,
    wrap ? 'stack--wrap' : '',
    className
  ].filter(Boolean).join(' ');
  
  const gapValue = typeof gap === 'number' ? `${gap}rem` : gap;

  return (
    <div
      className={stackClasses}
      style={{
        '--stack-gap': gapValue,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Stack;
