import { ReactNode, CSSProperties } from 'react';

export interface CollapseItem {
  /** Unique key for the panel */
  key: string;
  /** Panel header content */
  label: ReactNode;
  /** Panel body content */
  children: ReactNode;
  /** Disable this panel */
  disabled?: boolean;
  /** Extra content in the header */
  extra?: ReactNode;
}

export interface CollapseProps {
  /** Collapse items */
  items: CollapseItem[];
  /** Active panel keys (controlled) */
  activeKey?: string | string[];
  /** Default active panel keys (uncontrolled) */
  defaultActiveKey?: string | string[];
  /** Accordion mode - only one panel can be open */
  accordion?: boolean;
  /** Show border */
  bordered?: boolean;
  /** Expand icon position */
  expandIconPosition?: 'start' | 'end';
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<CollapseCSSVariables>;
  /** Callback when active panels change */
  onChange?: (key: string | string[]) => void;
}

export interface CollapseCSSVariables {
  // Container
  '--collapse-border-width': string;
  '--collapse-border-style': string;
  '--collapse-border-color': string;
  '--collapse-border-radius': string;
  '--collapse-background': string;
  
  // Item
  '--collapse-item-border-bottom-width': string;
  '--collapse-item-border-bottom-style': string;
  '--collapse-item-border-bottom-color': string;
  '--collapse-item-margin-bottom': string;
  
  // Header
  '--collapse-header-padding': string;
  '--collapse-header-background': string;
  '--collapse-header-color': string;
  '--collapse-header-font-size': string;
  '--collapse-header-font-weight': string;
  '--collapse-header-line-height': string;
  '--collapse-header-cursor': string;
  '--collapse-header-hover-background': string;
  '--collapse-header-hover-color': string;
  '--collapse-header-active-background': string;
  '--collapse-header-active-color': string;
  '--collapse-header-disabled-background': string;
  '--collapse-header-disabled-color': string;
  '--collapse-header-disabled-cursor': string;
  '--collapse-header-disabled-opacity': string;
  
  // Icon
  '--collapse-icon-size': string;
  '--collapse-icon-color': string;
  '--collapse-icon-margin': string;
  '--collapse-icon-transition-duration': string;
  '--collapse-icon-transition-timing': string;
  '--collapse-icon-rotate': string;
  '--collapse-icon-active-rotate': string;
  
  // Content
  '--collapse-content-padding': string;
  '--collapse-content-background': string;
  '--collapse-content-color': string;
  '--collapse-content-font-size': string;
  '--collapse-content-line-height': string;
  
  // Extra
  '--collapse-extra-margin-left': string;
  '--collapse-extra-color': string;
  '--collapse-extra-font-size': string;
  
  // Animation
  '--collapse-transition-duration': string;
  '--collapse-transition-timing': string;
  '--collapse-animation-duration': string;
  '--collapse-animation-timing': string;
  
  // Focus States
  '--collapse-focus-outline-width': string;
  '--collapse-focus-outline-style': string;
  '--collapse-focus-outline-color': string;
  '--collapse-focus-outline-offset': string;
}
