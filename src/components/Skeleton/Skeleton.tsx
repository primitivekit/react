import React from 'react';
import type { SkeletonProps } from './Skeleton.types';
import './Skeleton.css';

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  circle = false,
  count = 1,
  className = '',
  style = {},
  ...props
}) => {
  const skeletonClasses = [
    'skeleton',
    `skeleton--${variant}`,
    circle ? 'skeleton--circle' : '',
    className
  ].filter(Boolean).join(' ');
  
  const widthValue = typeof width === 'number' ? `${width}px` : width;
  const heightValue = typeof height === 'number' ? `${height}px` : height;
  
  const skeletonStyle = {
    '--skeleton-width': widthValue,
    '--skeleton-height': heightValue,
    ...style
  };

  if (count > 1) {
    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={skeletonClasses}
            style={skeletonStyle}
            {...props}
          />
        ))}
      </>
    );
  }

  return (
    <div
      className={skeletonClasses}
      style={skeletonStyle}
      {...props}
    />
  );
};

export default Skeleton;
