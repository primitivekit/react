import React from 'react';
import type { ProgressProps } from './Progress.types';
import './Progress.css';

const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = 100,
  size = 'medium',
  variant = 'determinate',
  label,
  showValue = false,
  className = '',
  style = {},
  ...props
}) => {
  const progressClasses = [
    'progress',
    `progress--${size}`,
    `progress--${variant}`,
    className
  ].filter(Boolean).join(' ');
  
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="progress-wrapper">
      {(label || showValue) && (
        <div className="progress__header">
          {label && <span className="progress__label">{label}</span>}
          {showValue && variant === 'determinate' && (
            <span className="progress__value">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div
        className={progressClasses}
        role="progressbar"
        aria-valuenow={variant === 'determinate' ? value : undefined}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        style={style}
        {...props}
      >
        <div
          className="progress__fill"
          style={{
            width: variant === 'determinate' ? `${percentage}%` : undefined
          }}
        />
      </div>
    </div>
  );
};

export default Progress;
