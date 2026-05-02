import { ReactNode, CSSProperties } from 'react';

/**
 * Dropdown placement
 */
export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';

/**
 * Dropdown item
 */
export interface DropdownItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  divider?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
}

/**
 * Comprehensive CSS variable customization interface
 */
export interface DropdownCSSVariables extends CSSProperties {
  /* Container */
  '--dropdown-bg-color'?: string;
  '--dropdown-border-radius'?: string;
  '--dropdown-border-width'?: string;
  '--dropdown-border-color'?: string;
  '--dropdown-box-shadow'?: string;
  '--dropdown-padding-top'?: string;
  '--dropdown-padding-right'?: string;
  '--dropdown-padding-bottom'?: string;
  '--dropdown-padding-left'?: string;
  '--dropdown-padding-y'?: string;
  '--dropdown-padding-x'?: string;
  '--dropdown-max-width'?: string;
  '--dropdown-min-width'?: string;
  '--dropdown-max-height'?: string;
  '--dropdown-z-index'?: string | number;
  
  /* Item */
  '--dropdown-item-color'?: string;
  '--dropdown-item-color-hover'?: string;
  '--dropdown-item-color-active'?: string;
  '--dropdown-item-color-disabled'?: string;
  '--dropdown-item-bg-color'?: string;
  '--dropdown-item-bg-color-hover'?: string;
  '--dropdown-item-bg-color-active'?: string;
  '--dropdown-item-padding-top'?: string;
  '--dropdown-item-padding-right'?: string;
  '--dropdown-item-padding-bottom'?: string;
  '--dropdown-item-padding-left'?: string;
  '--dropdown-item-padding-y'?: string;
  '--dropdown-item-padding-x'?: string;
  '--dropdown-item-border-radius'?: string;
  '--dropdown-item-font-size'?: string;
  '--dropdown-item-font-weight'?: string | number;
  '--dropdown-item-line-height'?: string | number;
  '--dropdown-item-gap'?: string;
  
  /* Divider */
  '--dropdown-divider-color'?: string;
  '--dropdown-divider-height'?: string;
  '--dropdown-divider-margin-y'?: string;
  
  /* Icon */
  '--dropdown-icon-size'?: string;
  
  /* Offset */
  '--dropdown-offset'?: string;
  
  /* Animations */
  '--dropdown-animation-duration'?: string;
  '--dropdown-animation-timing'?: string;
  '--dropdown-opacity'?: string | number;
  '--dropdown-opacity-disabled'?: string | number;
}

/**
 * Dropdown component props
 */
export interface DropdownProps {
  /**
   * Dropdown items
   */
  items: DropdownItem[];
  
  /**
   * Trigger element
   */
  children: ReactNode;
  
  /**
   * Dropdown placement
   * @default 'bottom-start'
   */
  placement?: DropdownPlacement;
  
  /**
   * Close on item click
   * @default true
   */
  closeOnClick?: boolean;
  
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
   * Disable dropdown
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
  style?: DropdownCSSVariables;
  
  /**
   * Accessible label
   */
  ariaLabel?: string;
}
