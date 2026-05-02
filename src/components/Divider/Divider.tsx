import React from 'react';
import type { DividerProps } from './Divider.types';
import './Divider.css';

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  className = '',
  style = {},
  ...props
}) => {
  const dividerClasses = [
    'divider',
    `divider--${orientation}`,
    `divider--${variant}`,
    label ? 'divider--with-label' : '',
    className
  ].filter(Boolean).join(' ');

  if (label && orientation === 'horizontal') {
    return (
      <div className={dividerClasses} style={style} role="separator" {...props}>
        <hr className="divider__line" />
        <span className="divider__label">{label}</span>
        <hr className="divider__line" />
      </div>
    );
  }

  return (
    <hr
      className={dividerClasses}
      style={style}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
};

export default Divider;
