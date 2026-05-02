import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardCSSVariables extends CSSProperties {
  '--card-bg-color'?: string;
  '--card-border-width'?: string;
  '--card-border-color'?: string;
  '--card-border-radius'?: string;
  '--card-padding'?: string;
  '--card-box-shadow'?: string;
  '--card-box-shadow-hover'?: string;
}

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  variant?: CardVariant;
  children?: ReactNode;
  className?: string;
  style?: CardCSSVariables;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}
