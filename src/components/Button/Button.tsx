import React from 'react';
import type { ButtonProps } from './Button.types';
import './Button.css';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  style = {},
  ariaLabel,
  ariaDescribedBy,
  ariaPressed,
  ariaExpanded,
  ariaControls,
  ariaHasPopup,
  loading = false,
  loadingText = 'Loading...',
  leftIcon,
  rightIcon,
  ...props
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full-width' : '',
    disabled ? 'btn--disabled' : '',
    loading ? 'btn--loading' : '',
    className
  ].filter(Boolean).join(' ');

  const isDisabled = disabled || loading;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      onClick={handleClick}
      style={style}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-pressed={ariaPressed}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-busy={loading}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading && (
        <span className="btn__spinner" role="status" aria-hidden="true">
          <span className="btn__spinner-circle"></span>
        </span>
      )}
      {!loading && leftIcon && (
        <span className="btn__icon btn__icon--left" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      <span className="btn__content">
        {loading ? loadingText : children}
      </span>
      {!loading && rightIcon && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
