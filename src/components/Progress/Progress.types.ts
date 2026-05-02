import { CSSProperties, HTMLAttributes } from 'react';

export type ProgressSize = 'small' | 'medium' | 'large';
export type ProgressVariant = 'determinate' | 'indeterminate';

export interface ProgressCSSVariables extends CSSProperties {
  '--progress-height'?: string;
  '--progress-bg-color'?: string;
  '--progress-fill-color'?: string;
  '--progress-border-radius'?: string;
}

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  value?: number;
  max?: number;
  size?: ProgressSize;
  variant?: ProgressVariant;
  label?: string;
  showValue?: boolean;
  className?: string;
  style?: ProgressCSSVariables;
}
