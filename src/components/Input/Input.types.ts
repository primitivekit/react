import { ReactNode, CSSProperties, InputHTMLAttributes } from 'react';

/**
 * Input size variants
 */
export type InputSize = 'small' | 'medium' | 'large';

/**
 * Input variant styles
 */
export type InputVariant = 'default' | 'filled' | 'flushed' | 'unstyled';

/**
 * Input state
 */
export type InputState = 'default' | 'error' | 'success' | 'warning';

/**
 * Comprehensive CSS variable customization interface
 * Every visual property can be customized via CSS variables
 */
export interface InputCSSVariables extends CSSProperties {
  /* ============================================
   * SPACING - Padding
   * ============================================ */
  '--input-padding-top'?: string;
  '--input-padding-right'?: string;
  '--input-padding-bottom'?: string;
  '--input-padding-left'?: string;
  '--input-padding-y'?: string;
  '--input-padding-x'?: string;
  
  /* ============================================
   * SPACING - Margin
   * ============================================ */
  '--input-margin-top'?: string;
  '--input-margin-right'?: string;
  '--input-margin-bottom'?: string;
  '--input-margin-left'?: string;
  '--input-margin-y'?: string;
  '--input-margin-x'?: string;
  
  /* ============================================
   * BORDERS - Width
   * ============================================ */
  '--input-border-top-width'?: string;
  '--input-border-right-width'?: string;
  '--input-border-bottom-width'?: string;
  '--input-border-left-width'?: string;
  '--input-border-width'?: string;
  
  /* ============================================
   * BORDERS - Style
   * ============================================ */
  '--input-border-top-style'?: string;
  '--input-border-right-style'?: string;
  '--input-border-bottom-style'?: string;
  '--input-border-left-style'?: string;
  '--input-border-style'?: string;
  
  /* ============================================
   * BORDERS - Color
   * ============================================ */
  '--input-border-top-color'?: string;
  '--input-border-right-color'?: string;
  '--input-border-bottom-color'?: string;
  '--input-border-left-color'?: string;
  '--input-border-color'?: string;
  
  /* ============================================
   * BORDERS - Radius
   * ============================================ */
  '--input-border-top-left-radius'?: string;
  '--input-border-top-right-radius'?: string;
  '--input-border-bottom-right-radius'?: string;
  '--input-border-bottom-left-radius'?: string;
  '--input-border-radius'?: string;
  
  /* ============================================
   * DIMENSIONS
   * ============================================ */
  '--input-width'?: string;
  '--input-min-width'?: string;
  '--input-max-width'?: string;
  '--input-height'?: string;
  '--input-min-height'?: string;
  '--input-max-height'?: string;
  
  /* ============================================
   * TYPOGRAPHY
   * ============================================ */
  '--input-font-family'?: string;
  '--input-font-size'?: string;
  '--input-font-weight'?: string | number;
  '--input-font-style'?: string;
  '--input-line-height'?: string | number;
  '--input-letter-spacing'?: string;
  '--input-text-align'?: string;
  '--input-text-decoration'?: string;
  '--input-text-transform'?: string;
  
  /* ============================================
   * COLORS - Base State
   * ============================================ */
  '--input-bg-color'?: string;
  '--input-text-color'?: string;
  '--input-placeholder-color'?: string;
  '--input-placeholder-opacity'?: string | number;
  
  /* ============================================
   * COLORS - Hover State
   * ============================================ */
  '--input-bg-color-hover'?: string;
  '--input-text-color-hover'?: string;
  '--input-border-color-hover'?: string;
  '--input-border-top-color-hover'?: string;
  '--input-border-right-color-hover'?: string;
  '--input-border-bottom-color-hover'?: string;
  '--input-border-left-color-hover'?: string;
  
  /* ============================================
   * COLORS - Focus State
   * ============================================ */
  '--input-bg-color-focus'?: string;
  '--input-text-color-focus'?: string;
  '--input-border-color-focus'?: string;
  '--input-outline-color'?: string;
  '--input-outline-width'?: string;
  '--input-outline-style'?: string;
  '--input-outline-offset'?: string;
  '--input-ring-color'?: string;
  '--input-ring-width'?: string;
  '--input-ring-offset'?: string;
  
  /* ============================================
   * COLORS - Disabled State
   * ============================================ */
  '--input-bg-color-disabled'?: string;
  '--input-text-color-disabled'?: string;
  '--input-border-color-disabled'?: string;
  '--input-opacity-disabled'?: string | number;
  '--input-cursor-disabled'?: string;
  
  /* ============================================
   * COLORS - Error State
   * ============================================ */
  '--input-bg-color-error'?: string;
  '--input-text-color-error'?: string;
  '--input-border-color-error'?: string;
  '--input-border-color-error-focus'?: string;
  
  /* ============================================
   * COLORS - Success State
   * ============================================ */
  '--input-bg-color-success'?: string;
  '--input-text-color-success'?: string;
  '--input-border-color-success'?: string;
  '--input-border-color-success-focus'?: string;
  
  /* ============================================
   * COLORS - Warning State
   * ============================================ */
  '--input-bg-color-warning'?: string;
  '--input-text-color-warning'?: string;
  '--input-border-color-warning'?: string;
  '--input-border-color-warning-focus'?: string;
  
  /* ============================================
   * SHADOWS
   * ============================================ */
  '--input-box-shadow'?: string;
  '--input-box-shadow-hover'?: string;
  '--input-box-shadow-focus'?: string;
  '--input-box-shadow-disabled'?: string;
  
  /* ============================================
   * TRANSITIONS
   * ============================================ */
  '--input-transition-property'?: string;
  '--input-transition-duration'?: string;
  '--input-transition-timing'?: string;
  '--input-transition-delay'?: string;
  
  /* ============================================
   * LAYOUT & DISPLAY
   * ============================================ */
  '--input-display'?: string;
  '--input-position'?: string;
  '--input-cursor'?: string;
  '--input-overflow'?: string;
  '--input-vertical-align'?: string;
  
  /* ============================================
   * ICONS/ADDONS
   * ============================================ */
  '--input-icon-size'?: string;
  '--input-icon-color'?: string;
  '--input-icon-spacing'?: string;
  '--input-left-element-width'?: string;
  '--input-right-element-width'?: string;
  
  /* ============================================
   * LABEL
   * ============================================ */
  '--input-label-color'?: string;
  '--input-label-font-size'?: string;
  '--input-label-font-weight'?: string | number;
  '--input-label-margin-bottom'?: string;
  '--input-label-color-disabled'?: string;
  '--input-label-color-error'?: string;
  '--input-label-color-success'?: string;
  '--input-label-color-warning'?: string;
  
  /* ============================================
   * HELPER TEXT
   * ============================================ */
  '--input-helper-color'?: string;
  '--input-helper-font-size'?: string;
  '--input-helper-margin-top'?: string;
  '--input-helper-color-error'?: string;
  '--input-helper-color-success'?: string;
  '--input-helper-color-warning'?: string;
}

/**
 * Input component props
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'> {
  /**
   * Input size
   * @default 'medium'
   */
  size?: InputSize;
  
  /**
   * Visual style variant
   * @default 'default'
   */
  variant?: InputVariant;
  
  /**
   * Input state for validation feedback
   * @default 'default'
   */
  state?: InputState;
  
  /**
   * Label text
   */
  label?: string;
  
  /**
   * Helper text displayed below input
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
   * Make input full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Icon or element to display on the left
   */
  leftElement?: ReactNode;
  
  /**
   * Icon or element to display on the right
   */
  rightElement?: ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Inline styles with CSS variable support
   */
  style?: InputCSSVariables;
  
  /**
   * ID for the input element
   */
  id?: string;
  
  /**
   * Name attribute
   */
  name?: string;
  
  /**
   * Input type
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week';
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Input value (controlled)
   */
  value?: string | number;
  
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string | number;
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Disable the input
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Make input read-only
   * @default false
   */
  readOnly?: boolean;
  
  /**
   * Require input
   * @default false
   */
  required?: boolean;
  
  /**
   * Accessible label (if label prop not used)
   */
  ariaLabel?: string;
  
  /**
   * ID of element that describes the input
   */
  ariaDescribedBy?: string;
  
  /**
   * Indicates invalid input
   */
  ariaInvalid?: boolean;
}
