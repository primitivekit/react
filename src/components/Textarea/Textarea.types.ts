import { CSSProperties, TextareaHTMLAttributes } from 'react';

/**
 * Textarea size variants
 */
export type TextareaSize = 'small' | 'medium' | 'large';

/**
 * Textarea variant styles
 */
export type TextareaVariant = 'default' | 'filled' | 'unstyled';

/**
 * Textarea state
 */
export type TextareaState = 'default' | 'error' | 'success' | 'warning';

/**
 * Textarea resize behavior
 */
export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';

/**
 * Comprehensive CSS variable customization interface
 */
export interface TextareaCSSVariables extends CSSProperties {
  /* Spacing */
  '--textarea-padding-top'?: string;
  '--textarea-padding-right'?: string;
  '--textarea-padding-bottom'?: string;
  '--textarea-padding-left'?: string;
  '--textarea-padding-y'?: string;
  '--textarea-padding-x'?: string;
  '--textarea-margin-top'?: string;
  '--textarea-margin-right'?: string;
  '--textarea-margin-bottom'?: string;
  '--textarea-margin-left'?: string;
  
  /* Borders */
  '--textarea-border-width'?: string;
  '--textarea-border-style'?: string;
  '--textarea-border-color'?: string;
  '--textarea-border-radius'?: string;
  '--textarea-border-color-hover'?: string;
  '--textarea-border-color-focus'?: string;
  
  /* Dimensions */
  '--textarea-width'?: string;
  '--textarea-min-width'?: string;
  '--textarea-max-width'?: string;
  '--textarea-height'?: string;
  '--textarea-min-height'?: string;
  '--textarea-max-height'?: string;
  
  /* Typography */
  '--textarea-font-family'?: string;
  '--textarea-font-size'?: string;
  '--textarea-font-weight'?: string | number;
  '--textarea-line-height'?: string | number;
  
  /* Colors */
  '--textarea-bg-color'?: string;
  '--textarea-text-color'?: string;
  '--textarea-placeholder-color'?: string;
  '--textarea-bg-color-hover'?: string;
  '--textarea-bg-color-focus'?: string;
  '--textarea-bg-color-disabled'?: string;
  '--textarea-text-color-disabled'?: string;
  
  /* States */
  '--textarea-border-color-error'?: string;
  '--textarea-border-color-success'?: string;
  '--textarea-border-color-warning'?: string;
  
  /* Effects */
  '--textarea-box-shadow'?: string;
  '--textarea-box-shadow-focus'?: string;
  '--textarea-ring-color'?: string;
  '--textarea-ring-width'?: string;
  '--textarea-resize'?: string;
}

/**
 * Textarea component props
 */
export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  /**
   * Textarea size
   * @default 'medium'
   */
  size?: TextareaSize;
  
  /**
   * Visual style variant
   * @default 'default'
   */
  variant?: TextareaVariant;
  
  /**
   * Textarea state for validation feedback
   * @default 'default'
   */
  state?: TextareaState;
  
  /**
   * Resize behavior
   * @default 'vertical'
   */
  resize?: TextareaResize;
  
  /**
   * Label text
   */
  label?: string;
  
  /**
   * Helper text displayed below textarea
   */
  helperText?: string;
  
  /**
   * Error message (sets state to 'error')
   */
  error?: string;
  
  /**
   * Success message (sets state to 'success')
   */
  success?: string;
  
  /**
   * Warning message (sets state to 'warning')
   */
  warning?: string;
  
  /**
   * Make textarea full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Inline styles with CSS variable support
   */
  style?: TextareaCSSVariables;
  
  /**
   * ID for the textarea element
   */
  id?: string;
  
  /**
   * Name attribute
   */
  name?: string;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Textarea value (controlled)
   */
  value?: string;
  
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  
  /**
   * Number of visible text rows
   */
  rows?: number;
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  
  /**
   * Disable the textarea
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Make textarea read-only
   * @default false
   */
  readOnly?: boolean;
  
  /**
   * Require textarea
   * @default false
   */
  required?: boolean;
  
  /**
   * Maximum length
   */
  maxLength?: number;
  
  /**
   * Accessible label (if label prop not used)
   */
  ariaLabel?: string;
  
  /**
   * ID of element that describes the textarea
   */
  ariaDescribedBy?: string;
  
  /**
   * Indicates invalid textarea
   */
  ariaInvalid?: boolean;
}
