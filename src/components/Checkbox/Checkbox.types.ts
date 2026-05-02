import { CSSProperties, InputHTMLAttributes } from 'react';

export type CheckboxSize = 'small' | 'medium' | 'large';

export interface CheckboxCSSVariables extends CSSProperties {
  '--checkbox-size'?: string;
  '--checkbox-border-width'?: string;
  '--checkbox-border-color'?: string;
  '--checkbox-border-radius'?: string;
  '--checkbox-bg-color'?: string;
  '--checkbox-bg-color-checked'?: string;
  '--checkbox-border-color-checked'?: string;
  '--checkbox-checkmark-color'?: string;
  '--checkbox-label-gap'?: string;
  '--checkbox-label-color'?: string;
  '--checkbox-label-font-size'?: string;
}

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style' | 'type'> {
  size?: CheckboxSize;
  label?: string;
  helperText?: string;
  error?: string;
  className?: string;
  style?: CheckboxCSSVariables;
  id?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  ariaLabel?: string;
}
