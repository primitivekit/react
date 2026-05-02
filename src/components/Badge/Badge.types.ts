import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'solid' | 'subtle' | 'outline';
export type BadgeColorScheme = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';

export interface BadgeCSSVariables extends CSSProperties {
  '--badge-bg-color'?: string;
  '--badge-text-color'?: string;
  '--badge-border-color'?: string;
  '--badge-padding-x'?: string;
  '--badge-padding-y'?: string;
  '--badge-font-size'?: string;
  '--badge-border-radius'?: string;
}

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  variant?: BadgeVariant;
  colorScheme?: BadgeColorScheme;
  size?: BadgeSize;
  children?: ReactNode;
  className?: string;
  style?: BadgeCSSVariables;
}
