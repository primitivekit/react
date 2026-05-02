import { ReactNode, CSSProperties, ButtonHTMLAttributes } from 'react';

/**
 * Button size variants
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Button color variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost';

/**
 * Comprehensive CSS variable customization interface
 * Every visual property can be customized via CSS variables
 */
export interface ButtonCSSVariables extends CSSProperties {
  /* ============================================
   * SPACING - Padding
   * ============================================ */
  '--btn-padding-top'?: string;
  '--btn-padding-right'?: string;
  '--btn-padding-bottom'?: string;
  '--btn-padding-left'?: string;
  '--btn-padding-y'?: string;
  '--btn-padding-x'?: string;
  
  /* ============================================
   * SPACING - Margin
   * ============================================ */
  '--btn-margin-top'?: string;
  '--btn-margin-right'?: string;
  '--btn-margin-bottom'?: string;
  '--btn-margin-left'?: string;
  '--btn-margin-y'?: string;
  '--btn-margin-x'?: string;
  
  /* ============================================
   * BORDERS - Width
   * ============================================ */
  '--btn-border-top-width'?: string;
  '--btn-border-right-width'?: string;
  '--btn-border-bottom-width'?: string;
  '--btn-border-left-width'?: string;
  '--btn-border-width'?: string;
  
  /* ============================================
   * BORDERS - Style
   * ============================================ */
  '--btn-border-top-style'?: string;
  '--btn-border-right-style'?: string;
  '--btn-border-bottom-style'?: string;
  '--btn-border-left-style'?: string;
  '--btn-border-style'?: string;
  
  /* ============================================
   * BORDERS - Color
   * ============================================ */
  '--btn-border-top-color'?: string;
  '--btn-border-right-color'?: string;
  '--btn-border-bottom-color'?: string;
  '--btn-border-left-color'?: string;
  '--btn-border-color'?: string;
  
  /* ============================================
   * BORDERS - Radius
   * ============================================ */
  '--btn-border-top-left-radius'?: string;
  '--btn-border-top-right-radius'?: string;
  '--btn-border-bottom-right-radius'?: string;
  '--btn-border-bottom-left-radius'?: string;
  '--btn-border-radius'?: string;
  
  /* ============================================
   * DIMENSIONS
   * ============================================ */
  '--btn-width'?: string;
  '--btn-min-width'?: string;
  '--btn-max-width'?: string;
  '--btn-height'?: string;
  '--btn-min-height'?: string;
  '--btn-max-height'?: string;
  
  /* ============================================
   * TYPOGRAPHY
   * ============================================ */
  '--btn-font-family'?: string;
  '--btn-font-size'?: string;
  '--btn-font-weight'?: string | number;
  '--btn-font-style'?: string;
  '--btn-line-height'?: string | number;
  '--btn-letter-spacing'?: string;
  '--btn-text-align'?: string;
  '--btn-text-decoration'?: string;
  '--btn-text-transform'?: string;
  '--btn-text-shadow'?: string;
  '--btn-white-space'?: string;
  '--btn-word-spacing'?: string;
  
  /* ============================================
   * COLORS - Base State
   * ============================================ */
  '--btn-bg-color'?: string;
  '--btn-text-color'?: string;
  '--btn-color'?: string;
  
  /* ============================================
   * COLORS - Hover State
   * ============================================ */
  '--btn-bg-color-hover'?: string;
  '--btn-text-color-hover'?: string;
  '--btn-border-color-hover'?: string;
  '--btn-border-top-color-hover'?: string;
  '--btn-border-right-color-hover'?: string;
  '--btn-border-bottom-color-hover'?: string;
  '--btn-border-left-color-hover'?: string;
  
  /* ============================================
   * COLORS - Active State
   * ============================================ */
  '--btn-bg-color-active'?: string;
  '--btn-text-color-active'?: string;
  '--btn-border-color-active'?: string;
  '--btn-border-top-color-active'?: string;
  '--btn-border-right-color-active'?: string;
  '--btn-border-bottom-color-active'?: string;
  '--btn-border-left-color-active'?: string;
  
  /* ============================================
   * COLORS - Focus State
   * ============================================ */
  '--btn-bg-color-focus'?: string;
  '--btn-text-color-focus'?: string;
  '--btn-border-color-focus'?: string;
  '--btn-outline-color'?: string;
  '--btn-outline-width'?: string;
  '--btn-outline-style'?: string;
  '--btn-outline-offset'?: string;
  
  /* ============================================
   * COLORS - Disabled State
   * ============================================ */
  '--btn-bg-color-disabled'?: string;
  '--btn-text-color-disabled'?: string;
  '--btn-border-color-disabled'?: string;
  '--btn-opacity-disabled'?: string | number;
  
  /* ============================================
   * SHADOWS
   * ============================================ */
  '--btn-box-shadow'?: string;
  '--btn-box-shadow-hover'?: string;
  '--btn-box-shadow-active'?: string;
  '--btn-box-shadow-focus'?: string;
  '--btn-box-shadow-disabled'?: string;
  
  /* ============================================
   * TRANSFORMS
   * ============================================ */
  '--btn-transform'?: string;
  '--btn-transform-hover'?: string;
  '--btn-transform-active'?: string;
  '--btn-transform-focus'?: string;
  '--btn-transform-disabled'?: string;
  '--btn-transform-origin'?: string;
  
  /* ============================================
   * TRANSITIONS
   * ============================================ */
  '--btn-transition-property'?: string;
  '--btn-transition-duration'?: string;
  '--btn-transition-timing'?: string;
  '--btn-transition-delay'?: string;
  
  /* ============================================
   * LAYOUT & DISPLAY
   * ============================================ */
  '--btn-display'?: string;
  '--btn-position'?: string;
  '--btn-top'?: string;
  '--btn-right'?: string;
  '--btn-bottom'?: string;
  '--btn-left'?: string;
  '--btn-z-index'?: string | number;
  '--btn-overflow'?: string;
  '--btn-vertical-align'?: string;
  
  /* ============================================
   * FLEXBOX
   * ============================================ */
  '--btn-flex-direction'?: string;
  '--btn-flex-wrap'?: string;
  '--btn-justify-content'?: string;
  '--btn-align-items'?: string;
  '--btn-align-content'?: string;
  '--btn-gap'?: string;
  '--btn-row-gap'?: string;
  '--btn-column-gap'?: string;
  
  /* ============================================
   * CURSOR & INTERACTION
   * ============================================ */
  '--btn-cursor'?: string;
  '--btn-cursor-disabled'?: string;
  '--btn-pointer-events'?: string;
  '--btn-user-select'?: string;
  '--btn-touch-action'?: string;
  
  /* ============================================
   * OPACITY & VISIBILITY
   * ============================================ */
  '--btn-opacity'?: string | number;
  '--btn-visibility'?: string;
  
  /* ============================================
   * FILTERS & EFFECTS
   * ============================================ */
  '--btn-filter'?: string;
  '--btn-filter-hover'?: string;
  '--btn-filter-active'?: string;
  '--btn-filter-disabled'?: string;
  '--btn-backdrop-filter'?: string;
  '--btn-mix-blend-mode'?: string;
  
  /* ============================================
   * ANIMATION
   * ============================================ */
  '--btn-animation'?: string;
  '--btn-animation-duration'?: string;
  '--btn-animation-timing'?: string;
  '--btn-animation-delay'?: string;
  '--btn-animation-iteration'?: string | number;
  '--btn-animation-direction'?: string;
  '--btn-animation-fill-mode'?: string;
  
  /* ============================================
   * ICON SPACING
   * ============================================ */
  '--btn-icon-size'?: string;
  '--btn-icon-margin-left'?: string;
  '--btn-icon-margin-right'?: string;
  
  /* ============================================
   * SPINNER/LOADING
   * ============================================ */
  '--btn-spinner-size'?: string;
  '--btn-spinner-width'?: string;
  '--btn-spinner-color'?: string;
  '--btn-spinner-duration'?: string;
}

/**
 * Button component props
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /**
   * Button content
   */
  children?: ReactNode;
  
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Button size
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * Disable the button
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Make button full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Inline styles with CSS variable support
   */
  style?: ButtonCSSVariables;
  
  /**
   * Accessible label for screen readers
   */
  ariaLabel?: string;
  
  /**
   * ID of element that describes the button
   */
  ariaDescribedBy?: string;
  
  /**
   * Indicates pressed state for toggle buttons
   */
  ariaPressed?: boolean;
  
  /**
   * Indicates expanded state for expandable buttons
   */
  ariaExpanded?: boolean;
  
  /**
   * ID of element controlled by this button
   */
  ariaControls?: string;
  
  /**
   * Type of popup triggered by button
   */
  ariaHasPopup?: 'true' | 'false' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  
  /**
   * Show loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Text to display during loading
   * @default 'Loading...'
   */
  loadingText?: string;
  
  /**
   * Icon to display on the left side
   */
  leftIcon?: ReactNode;
  
  /**
   * Icon to display on the right side
   */
  rightIcon?: ReactNode;
}
