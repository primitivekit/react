import { ReactNode, FormHTMLAttributes, CSSProperties } from 'react';

export type FormLayout = 'horizontal' | 'vertical' | 'inline';
export type FormSize = 'small' | 'medium' | 'large';

export interface FormItemProps {
  /** Form item label */
  label?: ReactNode;
  /** Form item name/id */
  name?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Validation error message */
  error?: string;
  /** Help text */
  help?: ReactNode;
  /** Form item children */
  children: ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
}

export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  /** Form layout */
  layout?: FormLayout;
  /** Form size */
  size?: FormSize;
  /** Form children */
  children: ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<FormCSSVariables>;
  /** Form submit handler */
  onSubmit?: (values: Record<string, any>) => void;
  /** Form validation handler */
  onValidate?: (values: Record<string, any>) => Record<string, string>;
}

export interface FormCSSVariables {
  // Container
  '--form-gap': string;
  '--form-padding': string;
  
  // Item
  '--form-item-margin-bottom': string;
  '--form-item-label-margin-bottom': string;
  
  // Label
  '--form-label-font-size': string;
  '--form-label-font-weight': string;
  '--form-label-line-height': string;
  '--form-label-color': string;
  '--form-label-required-color': string;
  '--form-label-required-margin-left': string;
  
  // Error
  '--form-error-font-size': string;
  '--form-error-color': string;
  '--form-error-margin-top': string;
  '--form-error-line-height': string;
  
  // Help
  '--form-help-font-size': string;
  '--form-help-color': string;
  '--form-help-margin-top': string;
  '--form-help-line-height': string;
  
  // Layout: Horizontal
  '--form-horizontal-label-width': string;
  '--form-horizontal-label-text-align': string;
  '--form-horizontal-label-padding-right': string;
  '--form-horizontal-content-flex': string;
  
  // Layout: Inline
  '--form-inline-item-display': string;
  '--form-inline-item-margin-right': string;
  '--form-inline-label-margin-right': string;
  '--form-inline-label-margin-bottom': string;
  
  // Size: Small
  '--form-small-label-font-size': string;
  '--form-small-error-font-size': string;
  '--form-small-help-font-size': string;
  
  // Size: Medium
  '--form-medium-label-font-size': string;
  '--form-medium-error-font-size': string;
  '--form-medium-help-font-size': string;
  
  // Size: Large
  '--form-large-label-font-size': string;
  '--form-large-error-font-size': string;
  '--form-large-help-font-size': string;
  
  // Animation
  '--form-transition-duration': string;
  '--form-transition-timing': string;
}
