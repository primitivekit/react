import React from 'react';
import type { BadgeProps } from './Badge.types';
import './Badge.css';

const Badge: React.FC<BadgeProps> = ({
  variant = 'solid',
  colorScheme = 'primary',
  size = 'medium',
  children,
  className = '',
  style = {},
  ...props
}) => {
  const badgeClasses = [
    'badge',
    `badge--${variant}`,
    `badge--${colorScheme}`,
    `badge--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} style={style} {...props}>
      {children}
    </span>
  );
};

export default Badge;
