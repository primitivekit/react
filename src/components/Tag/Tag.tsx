import React from 'react';
import type { TagProps } from './Tag.types';
import './Tag.css';

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  closable = false,
  onClose,
  icon,
  className = '',
  style = {},
  ...props
}) => {
  const tagClasses = [
    'tag',
    `tag--${variant}`,
    `tag--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={tagClasses} style={style} {...props}>
      {icon && <span className="tag__icon">{icon}</span>}
      <span className="tag__content">{children}</span>
      {closable && (
        <button
          type="button"
          className="tag__close"
          onClick={onClose}
          aria-label="Close tag"
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;
