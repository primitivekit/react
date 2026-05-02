import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';

export interface DividerCSSVariables extends CSSProperties {
  '--divider-color'?: string;
  '--divider-width'?: string;
  '--divider-style'?: string;
  '--divider-margin-y'?: string;
  '--divider-margin-x'?: string;
}

export interface DividerProps extends Omit<HTMLAttributes<HTMLHRElement>, 'style'> {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  label?: ReactNode;
  className?: string;
  style?: DividerCSSVariables;
}
