import { CSSProperties, HTMLAttributes } from 'react';

export type SpinnerSize = 'small' | 'medium' | 'large' | 'xlarge';
export type SpinnerVariant = 'border' | 'dots';

export interface SpinnerCSSVariables extends CSSProperties {
  '--spinner-size'?: string;
  '--spinner-color'?: string;
  '--spinner-border-width'?: string;
  '--spinner-speed'?: string;
}

export interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  color?: string;
  label?: string;
  className?: string;
  style?: SpinnerCSSVariables;
}
