import React from 'react';
import type { CardProps } from './Card.types';
import './Card.css';

const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  children,
  className = '',
  style = {},
  hoverable = false,
  clickable = false,
  onClick,
  ...props
}) => {
  const cardClasses = [
    'card',
    `card--${variant}`,
    hoverable ? 'card--hoverable' : '',
    clickable ? 'card--clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      style={style}
      onClick={onClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
