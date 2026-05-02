import React from 'react';
import type { LinkProps } from './Link.types';
import './Link.css';

const Link: React.FC<LinkProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  disabled = false,
  external = false,
  underline = 'hover',
  href,
  target,
  rel,
  className = '',
  style = {},
  leftIcon,
  rightIcon,
  ariaLabel,
  ariaDescribedBy,
  ariaCurrent,
  onClick,
  ...props
}) => {
  const linkClasses = [
    'link',
    `link--${variant}`,
    `link--${size}`,
    `link--underline-${underline}`,
    disabled ? 'link--disabled' : '',
    external ? 'link--external' : '',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  // Auto-set target and rel for external links
  const linkTarget = external ? '_blank' : target;
  const linkRel = external ? 'noopener noreferrer' : rel;

  return (
    <a
      href={disabled ? undefined : href}
      target={linkTarget}
      rel={linkRel}
      className={linkClasses}
      style={style}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-current={ariaCurrent}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      {...props}
    >
      {leftIcon && (
        <span className="link__icon link__icon--left" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      <span className="link__content">{children}</span>
      {rightIcon && (
        <span className="link__icon link__icon--right" aria-hidden="true">
          {rightIcon}
        </span>
      )}
      {external && !rightIcon && (
        <span className="link__external-icon" aria-hidden="true">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      )}
    </a>
  );
};

export default Link;
