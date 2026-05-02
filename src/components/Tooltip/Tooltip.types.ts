import { ReactNode, CSSProperties } from 'react';

/**
 * Tooltip placement
 */
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

/**
 * Tooltip variant
 */
export type TooltipVariant = 'dark' | 'light';

/**
 * Comprehensive CSS variable customization interface
 */
export interface TooltipCSSVariables extends CSSProperties {
  /* Container */
  '--tooltip-bg-color'?: string;
  '--tooltip-color'?: string;
  '--tooltip-border-radius'?: string;
  '--tooltip-border-width'?: string;
  '--tooltip-border-color'?: string;
  '--tooltip-box-shadow'?: string;
  '--tooltip-padding-top'?: string;
  '--tooltip-padding-right'?: string;
  '--tooltip-padding-bottom'?: string;
  '--tooltip-padding-left'?: string;
  '--tooltip-padding-y'?: string;
  '--tooltip-padding-x'?: string;
  '--tooltip-max-width'?: string;
  '--tooltip-z-index'?: string | number;
  
  /* Typography */
  '--tooltip-font-size'?: string;
  '--tooltip-font-weight'?: string | number;
  '--tooltip-line-height'?: string | number;
  '--tooltip-text-align'?: string;
  
  /* Arrow */
  '--tooltip-arrow-size'?: string;
  '--tooltip-arrow-color'?: string;
  '--tooltip-arrow-border-color'?: string;
  
  /* Offset */
  '--tooltip-offset'?: string;
  
  /* Animations */
  '--tooltip-animation-duration'?: string;
  '--tooltip-animation-timing'?: string;
  '--tooltip-opacity'?: string | number;
}

/**
 * Tooltip component props
 */
export interface TooltipProps {
  /**
   * Tooltip content
   */
  content: ReactNode;
  
  /**
   * Element that triggers the tooltip
   */
  children: ReactNode;
  
  /**
   * Tooltip placement
   * @default 'top'
   */
  placement?: TooltipPlacement;
  
  /**
   * Tooltip variant
   * @default 'dark'
   */
  variant?: TooltipVariant;
  
  /**
   * Show arrow
   * @default true
   */
  showArrow?: boolean;
  
  /**
   * Delay before showing (ms)
   * @default 200
   */
  delay?: number;
  
  /**
   * Disable tooltip
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
  style?: TooltipCSSVariables;
  
  /**
   * Accessible label
   */
  ariaLabel?: string;
}
