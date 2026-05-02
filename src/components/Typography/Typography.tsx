import React from 'react';
import type { TypographyProps } from './Typography.types';
import './Typography.css';

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  weight,
  align,
  color,
  ellipsis = false,
  lineClamp,
  component,
  className = '',
  style = {},
  ...props
}) => {
  const typographyClasses = [
    'typography',
    `typography--${variant}`,
    weight ? `typography--weight-${weight}` : '',
    align ? `typography--align-${align}` : '',
    ellipsis ? 'typography--ellipsis' : '',
    lineClamp ? 'typography--line-clamp' : '',
    className
  ].filter(Boolean).join(' ');

  const variantToElement = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span'
  };

  const Component = component || variantToElement[variant] || 'p';

  const inlineStyles = {
    ...style,
    ...(color && { '--typography-color': color }),
    ...(lineClamp && { '--typography-line-clamp': lineClamp })
  } as React.CSSProperties;

  return (
    <Component
      className={typographyClasses}
      style={inlineStyles}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
