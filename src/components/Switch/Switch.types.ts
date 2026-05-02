import { CSSProperties, InputHTMLAttributes } from 'react';

export type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchCSSVariables extends CSSProperties {
  '--switch-width'?: string;
  '--switch-height'?: string;
  '--switch-bg-color'?: string;
  '--switch-bg-color-checked'?: string;
  '--switch-thumb-size'?: string;
  '--switch-thumb-color'?: string;
  '--switch-label-gap'?: string;
}

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style' | 'type'> {
  size?: SwitchSize;
  label?: string;
  helperText?: string;
  error?: string;
  className?: string;
  style?: SwitchCSSVariables;
  id?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  ariaLabel?: string;
}
