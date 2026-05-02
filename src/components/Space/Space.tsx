import React from 'react';
import type { SpaceProps } from './Space.types';
import './Space.css';

const Space: React.FC<SpaceProps> = ({
  children,
  size = 'medium',
  direction = 'horizontal',
  align,
  wrap = false,
  className = '',
  style = {},
  ...props
}) => {
  const spaceClasses = [
    'space',
    `space--${direction}`,
    typeof size === 'string' ? `space--${size}` : '',
    align ? `space--align-${align}` : '',
    wrap ? 'space--wrap' : '',
    className
  ].filter(Boolean).join(' ');

  const inlineStyles = {
    ...style,
    ...(typeof size === 'number' && { '--space-gap': `${size}px` })
  } as React.CSSProperties;

  return (
    <div className={spaceClasses} style={inlineStyles} {...props}>
      {React.Children.map(children, (child, index) => (
        child && <div key={index} className="space__item">{child}</div>
      ))}
    </div>
  );
};

export default Space;
