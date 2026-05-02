import { ReactNode, CSSProperties, AnchorHTMLAttributes } from 'react';

/**
 * Link size variants
 */
export type LinkSize = 'small' | 'medium' | 'large';

/**
 * Link variant styles
 */
export type LinkVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'muted';

/**
 * Comprehensive CSS variable customization interface
 */
export interface LinkCSSVariables extends CSSProperties {
  /* Colors */
  '--link-color'?: string;
  '--link-color-hover'?: string;
  '--link-color-active'?: string;
  '--link-color-visited'?: string;
  '--link-color-focus'?: string;
  '--link-bg-color'?: string;
  '--link-bg-color-hover'?: string;
  '--link-bg-color-active'?: string;
  '--link-bg-color-focus'?: string;
  
  /* Typography */
  '--link-font-family'?: string;
  '--link-font-size'?: string;
  '--link-font-weight'?: string | number;
  '--link-font-style'?: string;
  '--link-line-height'?: string | number;
  '--link-letter-spacing'?: string;
  '--link-text-align'?: string;
  '--link-text-decoration'?: string;
  '--link-text-decoration-hover'?: string;
  '--link-text-decoration-active'?: string;
  '--link-text-decoration-focus'?: string;
  '--link-text-transform'?: string;
  '--link-text-shadow'?: string;
  '--link-white-space'?: string;
  '--link-word-break'?: string;
  '--link-word-wrap'?: string;
  
  /* Spacing - Padding */
  '--link-padding-top'?: string;
  '--link-padding-right'?: string;
  '--link-padding-bottom'?: string;
  '--link-padding-left'?: string;
  '--link-padding-y'?: string;
  '--link-padding-x'?: string;
  
  /* Spacing - Margin */
  '--link-margin-top'?: string;
  '--link-margin-right'?: string;
  '--link-margin-bottom'?: string;
  '--link-margin-left'?: string;
  '--link-margin-y'?: string;
  '--link-margin-x'?: string;
  
  /* Borders */
  '--link-border-top-width'?: string;
  '--link-border-right-width'?: string;
  '--link-border-bottom-width'?: string;
  '--link-border-left-width'?: string;
  '--link-border-width'?: string;
  '--link-border-top-style'?: string;
  '--link-border-right-style'?: string;
  '--link-border-bottom-style'?: string;
  '--link-border-left-style'?: string;
  '--link-border-style'?: string;
  '--link-border-top-color'?: string;
  '--link-border-right-color'?: string;
  '--link-border-bottom-color'?: string;
  '--link-border-left-color'?: string;
  '--link-border-color'?: string;
  '--link-border-top-left-radius'?: string;
  '--link-border-top-right-radius'?: string;
  '--link-border-bottom-right-radius'?: string;
  '--link-border-bottom-left-radius'?: string;
  '--link-border-radius'?: string;
  
  /* Outline */
  '--link-outline-color'?: string;
  '--link-outline-width'?: string;
  '--link-outline-style'?: string;
  '--link-outline-offset'?: string;
  
  /* Effects */
  '--link-box-shadow'?: string;
  '--link-box-shadow-hover'?: string;
  '--link-box-shadow-active'?: string;
  '--link-box-shadow-focus'?: string;
  '--link-opacity'?: string | number;
  '--link-opacity-hover'?: string | number;
  '--link-opacity-active'?: string | number;
  '--link-opacity-disabled'?: string | number;
  
  /* Transforms */
  '--link-transform'?: string;
  '--link-transform-hover'?: string;
  '--link-transform-active'?: string;
  '--link-transform-origin'?: string;
  
  /* Transitions */
  '--link-transition-property'?: string;
  '--link-transition-duration'?: string;
  '--link-transition-timing'?: string;
  '--link-transition-delay'?: string;
  
  /* Display & Layout */
  '--link-display'?: string;
  '--link-position'?: string;
  '--link-vertical-align'?: string;
  
  /* Cursor */
  '--link-cursor'?: string;
  '--link-cursor-disabled'?: string;
  
  /* Icon */
  '--link-icon-size'?: string;
  '--link-icon-margin-left'?: string;
  '--link-icon-margin-right'?: string;
  
  /* Underline */
  '--link-underline-offset'?: string;
  '--link-underline-thickness'?: string;
}

/**
 * Link component props
 */
export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> {
  /**
   * Link content
   */
  children?: ReactNode;
  
  /**
   * Visual style variant
   * @default 'default'
   */
  variant?: LinkVariant;
  
  /**
   * Link size
   * @default 'medium'
   */
  size?: LinkSize;
  
  /**
   * Disable the link
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Show external link icon
   * @default false
   */
  external?: boolean;
  
  /**
   * Underline style
   * @default 'hover'
   */
  underline?: 'none' | 'hover' | 'always';
  
  /**
   * URL to navigate to
   */
  href?: string;
  
  /**
   * Target attribute
   */
  target?: string;
  
  /**
   * Rel attribute
   */
  rel?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Inline styles with CSS variable support
   */
  style?: LinkCSSVariables;
  
  /**
   * Icon on the left side
   */
  leftIcon?: ReactNode;
  
  /**
   * Icon on the right side
   */
  rightIcon?: ReactNode;
  
  /**
   * Accessible label
   */
  ariaLabel?: string;
  
  /**
   * ID of element that describes the link
   */
  ariaDescribedBy?: string;
  
  /**
   * Indicates current page
   */
  ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
}
