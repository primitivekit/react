import { ReactNode, CSSProperties } from 'react';

export type AvatarSize = 'small' | 'medium' | 'large' | number;
export type AvatarShape = 'circle' | 'square';

export interface AvatarCSSVariables extends CSSProperties {
  '--avatar-size'?: string;
  '--avatar-bg-color'?: string;
  '--avatar-color'?: string;
  '--avatar-border-radius'?: string;
  '--avatar-border-width'?: string;
  '--avatar-border-color'?: string;
  '--avatar-font-size'?: string;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  icon?: ReactNode;
  children?: ReactNode;
  size?: AvatarSize;
  shape?: AvatarShape;
  className?: string;
  style?: AvatarCSSVariables;
  onClick?: () => void;
}
