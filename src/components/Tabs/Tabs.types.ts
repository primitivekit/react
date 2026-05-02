import { ReactNode, CSSProperties } from 'react';

/**
 * Tab size variants
 */
export type TabsSize = 'small' | 'medium' | 'large';

/**
 * Tab variant styles
 */
export type TabsVariant = 'line' | 'enclosed' | 'soft' | 'solid';

/**
 * Tab orientation
 */
export type TabsOrientation = 'horizontal' | 'vertical';

/**
 * Individual tab item
 */
export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
}

/**
 * Comprehensive CSS variable customization interface
 */
export interface TabsCSSVariables extends CSSProperties {
  /* Container */
  '--tabs-bg-color'?: string;
  '--tabs-border-color'?: string;
  '--tabs-border-width'?: string;
  '--tabs-border-radius'?: string;
  '--tabs-padding'?: string;
  '--tabs-gap'?: string;
  
  /* Tab List */
  '--tabs-list-bg-color'?: string;
  '--tabs-list-border-color'?: string;
  '--tabs-list-border-width'?: string;
  '--tabs-list-padding'?: string;
  '--tabs-list-gap'?: string;
  
  /* Tab Button */
  '--tab-bg-color'?: string;
  '--tab-bg-color-hover'?: string;
  '--tab-bg-color-active'?: string;
  '--tab-bg-color-disabled'?: string;
  '--tab-color'?: string;
  '--tab-color-hover'?: string;
  '--tab-color-active'?: string;
  '--tab-color-disabled'?: string;
  '--tab-border-color'?: string;
  '--tab-border-color-hover'?: string;
  '--tab-border-color-active'?: string;
  '--tab-border-width'?: string;
  '--tab-border-radius'?: string;
  '--tab-padding-top'?: string;
  '--tab-padding-right'?: string;
  '--tab-padding-bottom'?: string;
  '--tab-padding-left'?: string;
  '--tab-padding-y'?: string;
  '--tab-padding-x'?: string;
  '--tab-font-size'?: string;
  '--tab-font-weight'?: string | number;
  '--tab-font-weight-active'?: string | number;
  '--tab-line-height'?: string | number;
  '--tab-min-width'?: string;
  '--tab-min-height'?: string;
  
  /* Tab Indicator */
  '--tab-indicator-color'?: string;
  '--tab-indicator-height'?: string;
  '--tab-indicator-width'?: string;
  '--tab-indicator-radius'?: string;
  
  /* Tab Panel */
  '--tab-panel-bg-color'?: string;
  '--tab-panel-color'?: string;
  '--tab-panel-padding-top'?: string;
  '--tab-panel-padding-right'?: string;
  '--tab-panel-padding-bottom'?: string;
  '--tab-panel-padding-left'?: string;
  '--tab-panel-padding-y'?: string;
  '--tab-panel-padding-x'?: string;
  
  /* Effects */
  '--tab-box-shadow'?: string;
  '--tab-box-shadow-hover'?: string;
  '--tab-box-shadow-active'?: string;
  '--tab-outline-color'?: string;
  '--tab-outline-width'?: string;
  '--tab-outline-offset'?: string;
  '--tab-opacity-disabled'?: string | number;
  
  /* Transitions */
  '--tab-transition-duration'?: string;
  '--tab-transition-timing'?: string;
  
  /* Icon */
  '--tab-icon-size'?: string;
  '--tab-icon-margin'?: string;
}

/**
 * Tabs component props
 */
export interface TabsProps {
  /**
   * Array of tab items
   */
  items: TabItem[];
  
  /**
   * Currently active tab ID
   */
  activeTab?: string;
  
  /**
   * Default active tab ID
   */
  defaultActiveTab?: string;
  
  /**
   * Callback when tab changes
   */
  onChange?: (tabId: string) => void;
  
  /**
   * Visual style variant
   * @default 'line'
   */
  variant?: TabsVariant;
  
  /**
   * Tab size
   * @default 'medium'
   */
  size?: TabsSize;
  
  /**
   * Tab orientation
   * @default 'horizontal'
   */
  orientation?: TabsOrientation;
  
  /**
   * Make tabs full width
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
  style?: TabsCSSVariables;
  
  /**
   * Accessible label for tab list
   */
  ariaLabel?: string;
}
