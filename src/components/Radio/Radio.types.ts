import { CSSProperties, InputHTMLAttributes } from 'react';

export type RadioSize = 'small' | 'medium' | 'large';

export interface RadioCSSVariables extends CSSProperties {
  '--radio-size'?: string;
  '--radio-border-width'?: string;
  '--radio-border-color'?: string;
  '--radio-bg-color'?: string;
  '--radio-bg-color-checked'?: string;
  '--radio-border-color-checked'?: string;
  '--radio-dot-color'?: string;
  '--radio-label-gap'?: string;
  '--radio-label-color'?: string;
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style' | 'type'> {
  size?: RadioSize;
  label?: string;
  helperText?: string;
  error?: string;
  className?: string;
  style?: RadioCSSVariables;
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  ariaLabel?: string;
}
