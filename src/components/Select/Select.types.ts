import { CSSProperties, SelectHTMLAttributes } from 'react';

export type SelectSize = 'small' | 'medium' | 'large';
export type SelectVariant = 'default' | 'filled' | 'flushed' | 'unstyled';
export type SelectState = 'default' | 'error' | 'success' | 'warning';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectCSSVariables extends CSSProperties {
  '--select-padding-y'?: string;
  '--select-padding-x'?: string;
  '--select-border-width'?: string;
  '--select-border-color'?: string;
  '--select-border-radius'?: string;
  '--select-bg-color'?: string;
  '--select-text-color'?: string;
  '--select-font-size'?: string;
  '--select-min-height'?: string;
  '--select-border-color-hover'?: string;
  '--select-border-color-focus'?: string;
  '--select-ring-color'?: string;
  '--select-icon-color'?: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'style'> {
  size?: SelectSize;
  variant?: SelectVariant;
  state?: SelectState;
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
  warning?: string;
  fullWidth?: boolean;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  style?: SelectCSSVariables;
  id?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  required?: boolean;
  ariaLabel?: string;
}
