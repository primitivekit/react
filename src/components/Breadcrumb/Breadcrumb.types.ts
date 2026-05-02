import { ReactNode, CSSProperties } from 'react';

/**
 * Breadcrumb size variants
 */
export type BreadcrumbSize = 'small' | 'medium' | 'large';

/**
 * Breadcrumb separator type
 */
export type BreadcrumbSeparator = 'slash' | 'chevron' | 'arrow' | 'dot' | 'custom';

/**
 * Individual breadcrumb item
 */
export interface BreadcrumbItem {
  id: string;
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
  ariaCurrent?: 'page' | 'step' | 'location';
}

/**
 * Comprehensive CSS variable customization interface
 */
export interface BreadcrumbCSSVariables extends CSSProperties {
  /* Container */
  '--breadcrumb-bg-color'?: string;
  '--breadcrumb-padding-top'?: string;
  '--breadcrumb-padding-right'?: string;
  '--breadcrumb-padding-bottom'?: string;
  '--breadcrumb-padding-left'?: string;
  '--breadcrumb-padding-y'?: string;
  '--breadcrumb-padding-x'?: string;
  '--breadcrumb-gap'?: string;
  
  /* Item */
  '--breadcrumb-item-color'?: string;
  '--breadcrumb-item-color-hover'?: string;
  '--breadcrumb-item-color-active'?: string;
  '--breadcrumb-item-color-disabled'?: string;
  '--breadcrumb-item-bg-color'?: string;
  '--breadcrumb-item-bg-color-hover'?: string;
  '--breadcrumb-item-font-size'?: string;
  '--breadcrumb-item-font-weight'?: string | number;
  '--breadcrumb-item-font-weight-active'?: string | number;
  '--breadcrumb-item-line-height'?: string | number;
  '--breadcrumb-item-padding-top'?: string;
  '--breadcrumb-item-padding-right'?: string;
  '--breadcrumb-item-padding-bottom'?: string;
  '--breadcrumb-item-padding-left'?: string;
  '--breadcrumb-item-padding-y'?: string;
  '--breadcrumb-item-padding-x'?: string;
  '--breadcrumb-item-border-radius'?: string;
  '--breadcrumb-item-text-decoration'?: string;
  '--breadcrumb-item-text-decoration-hover'?: string;
  
  /* Separator */
  '--breadcrumb-separator-color'?: string;
  '--breadcrumb-separator-size'?: string;
  '--breadcrumb-separator-margin'?: string;
  
  /* Icon */
  '--breadcrumb-icon-size'?: string;
  '--breadcrumb-icon-margin'?: string;
  
  /* Effects */
  '--breadcrumb-opacity-disabled'?: string | number;
  '--breadcrumb-outline-color'?: string;
  '--breadcrumb-outline-width'?: string;
  '--breadcrumb-outline-offset'?: string;
  
  /* Transitions */
  '--breadcrumb-transition-duration'?: string;
  '--breadcrumb-transition-timing'?: string;
}

/**
 * Breadcrumb component props
 */
export interface BreadcrumbProps {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItem[];
  
  /**
   * Separator style
   * @default 'chevron'
   */
  separator?: BreadcrumbSeparator;
  
  /**
   * Custom separator element (when separator is 'custom')
   */
  customSeparator?: ReactNode;
  
  /**
   * Breadcrumb size
   * @default 'medium'
   */
  size?: BreadcrumbSize;
  
  /**
   * Maximum items to show before collapsing
   */
  maxItems?: number;
  
  /**
   * Show home icon for first item
   * @default false
   */
  showHomeIcon?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Inline styles with CSS variable support
   */
  style?: BreadcrumbCSSVariables;
  
  /**
   * Accessible label
   */
  ariaLabel?: string;
  
  /**
   * Click handler for breadcrumb items
   */
  onItemClick?: (item: BreadcrumbItem) => void;
}
