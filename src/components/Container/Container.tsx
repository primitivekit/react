import React from 'react';
import type { ContainerProps } from './Container.types';
import './Container.css';

const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  children,
  className = '',
  style = {},
  centerContent = false,
  ...props
}) => {
  const containerClasses = [
    'container',
    `container--${size}`,
    centerContent ? 'container--center' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} style={style} {...props}>
      {children}
    </div>
  );
};

export default Container;
