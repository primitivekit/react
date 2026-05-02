import { ReactNode, CSSProperties } from 'react';

/**
 * Popover placement
 */
export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';

/**
 * Popover trigger type
 */
export type PopoverTrigger = 'click' | 'hover' | 'focus';

/**
 * Comprehensive CSS variable customization interface
 */
export interface PopoverCSSVariables extends CSSProperties {
  /* Container */
  '--popover-bg-color'?: string;
  '--popover-color'?: string;
  '--popover-border-radius'?: string;
  '--popover-border-width'?: string;
  '--popover-border-color'?: string;
  '--popover-box-shadow'?: string;
  '--popover-padding-top'?: string;
  '--popover-padding-right'?: string;
  '--popover-padding-bottom'?: string;
  '--popover-padding-left'?: string;
  '--popover-padding-y'?: string;
  '--popover-padding-x'?: string;
  '--popover-max-width'?: string;
  '--popover-min-width'?: string;
  '--popover-max-height'?: string;
  '--popover-z-index'?: string | number;
  
  /* Header */
  '--popover-header-bg-color'?: string;
  '--popover-header-color'?: string;
  '--popover-header-padding-top'?: string;
  '--popover-header-padding-right'?: string;
  '--popover-header-padding-bottom'?: string;
  '--popover-header-padding-left'?: string;
  '--popover-header-padding-y'?: string;
  '--popover-header-padding-x'?: string;
  '--popover-header-border-bottom-width'?: string;
  '--popover-header-border-bottom-color'?: string;
  '--popover-header-font-size'?: string;
  '--popover-header-font-weight'?: string | number;
  
  /* Body */
  '--popover-body-padding-top'?: string;
  '--popover-body-padding-right'?: string;
  '--popover-body-padding-bottom'?: string;
  '--popover-body-padding-left'?: string;
  '--popover-body-padding-y'?: string;
  '--popover-body-padding-x'?: string;
  '--popover-body-font-size'?: string;
  '--popover-body-line-height'?: string | number;
  
  /* Footer */
  '--popover-footer-bg-color'?: string;
  '--popover-footer-padding-top'?: string;
  '--popover-footer-padding-right'?: string;
  '--popover-footer-padding-bottom'?: string;
  '--popover-footer-padding-left'?: string;
  '--popover-footer-padding-y'?: string;
  '--popover-footer-padding-x'?: string;
  '--popover-footer-border-top-width'?: string;
  '--popover-footer-border-top-color'?: string;
  '--popover-footer-gap'?: string;
  
  /* Arrow */
  '--popover-arrow-size'?: string;
  '--popover-arrow-color'?: string;
  '--popover-arrow-border-color'?: string;
  
  /* Close Button */
  '--popover-close-size'?: string;
  '--popover-close-color'?: string;
  '--popover-close-color-hover'?: string;
  '--popover-close-bg-color'?: string;
  '--popover-close-bg-color-hover'?: string;
  
  /* Offset */
  '--popover-offset'?: string;
  
  /* Animations */
  '--popover-animation-duration'?: string;
  '--popover-animation-timing'?: string;
  '--popover-opacity'?: string | number;
}

/**
 * Popover component props
 */
export interface PopoverProps {
  /**
   * Popover content
   */
  content: ReactNode;
  
  /**
   * Popover header (optional)
   */
  header?: ReactNode;
  
  /**
   * Popover footer (optional)
   */
  footer?: ReactNode;
  
  /**
   * Element that triggers the popover
   */
  children: ReactNode;
  
  /**
   * Popover placement
   * @default 'bottom'
   */
  placement?: PopoverPlacement;
  
  /**
   * Trigger type
   * @default 'click'
   */
  trigger?: PopoverTrigger;
  
  /**
   * Show arrow
   * @default true
   */
  showArrow?: boolean;
  
  /**
   * Show close button
   * @default false
   */
  showCloseButton?: boolean;
  
  /**
   * Close on outside click
   * @default true
   */
  closeOnOutsideClick?: boolean;
  
  /**
   * Close on escape key
   * @default true
   */
  closeOnEscape?: boolean;
  
  /**
   * Delay before showing (ms) - for hover trigger
   * @default 200
   */
  delay?: number;
  
  /**
   * Controlled open state
   */
  isOpen?: boolean;
  
  /**
   * Default open state
   */
  defaultOpen?: boolean;
  
  /**
   * Callback when open state changes
   */
  onOpenChange?: (isOpen: boolean) => void;
  
  /**
   * Disable popover
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Inline styles with CSS variable support
   */
  style?: PopoverCSSVariables;
  
  /**
   * Accessible label
   */
  ariaLabel?: string;
}
