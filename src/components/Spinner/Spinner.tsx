import React from 'react';
import type { SpinnerProps } from './Spinner.types';
import './Spinner.css';

const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  variant = 'border',
  color,
  label = 'Loading...',
  className = '',
  style = {},
  ...props
}) => {
  const spinnerClasses = [
    'spinner',
    `spinner--${size}`,
    `spinner--${variant}`,
    className
  ].filter(Boolean).join(' ');
  
  const spinnerStyle = color ? { '--spinner-color': color, ...style } : style;

  return (
    <div
      className={spinnerClasses}
      role="status"
      aria-label={label}
      style={spinnerStyle}
      {...props}
    >
      {variant === 'border' && <div className="spinner__circle"></div>}
      {variant === 'dots' && (
        <div className="spinner__dots">
          <div className="spinner__dot"></div>
          <div className="spinner__dot"></div>
          <div className="spinner__dot"></div>
        </div>
      )}
      <span className="spinner__label">{label}</span>
    </div>
  );
};

export default Spinner;
