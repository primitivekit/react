import React, { useState } from 'react';
import type { AvatarProps } from './Avatar.types';
import './Avatar.css';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  icon,
  children,
  size = 'medium',
  shape = 'circle',
  className = '',
  style = {},
  onClick,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);

  const avatarClasses = [
    'avatar',
    `avatar--${shape}`,
    typeof size === 'string' ? `avatar--${size}` : '',
    onClick ? 'avatar--clickable' : '',
    className
  ].filter(Boolean).join(' ');

  const inlineStyles = {
    ...style,
    ...(typeof size === 'number' && { '--avatar-size': `${size}px` })
  } as React.CSSProperties;

  const renderContent = () => {
    if (src && !imgError) {
      return (
        <img
          src={src}
          alt={alt}
          className="avatar__image"
          onError={() => setImgError(true)}
        />
      );
    }
    if (icon) return <span className="avatar__icon">{icon}</span>;
    if (children) return <span className="avatar__text">{children}</span>;
    return <span className="avatar__text">{alt.charAt(0).toUpperCase()}</span>;
  };

  return (
    <div
      className={avatarClasses}
      style={inlineStyles}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {renderContent()}
    </div>
  );
};

export default Avatar;
