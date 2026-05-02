import { CSSProperties } from 'react';

export type PaginationSize = 'small' | 'medium' | 'large';

export interface PaginationProps {
  /** Current page number */
  current?: number;
  /** Default current page (uncontrolled) */
  defaultCurrent?: number;
  /** Total number of items */
  total: number;
  /** Number of items per page */
  pageSize?: number;
  /** Default page size (uncontrolled) */
  defaultPageSize?: number;
  /** Page size options */
  pageSizeOptions?: number[];
  /** Show page size changer */
  showSizeChanger?: boolean;
  /** Show quick jumper */
  showQuickJumper?: boolean;
  /** Show total count */
  showTotal?: boolean | ((total: number, range: [number, number]) => string);
  /** Size of pagination */
  size?: PaginationSize;
  /** Disable pagination */
  disabled?: boolean;
  /** Simple mode */
  simple?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<PaginationCSSVariables>;
  /** Callback when page changes */
  onChange?: (page: number, pageSize: number) => void;
  /** Callback when page size changes */
  onShowSizeChange?: (current: number, size: number) => void;
}

export interface PaginationCSSVariables {
  // Container
  '--pagination-display': string;
  '--pagination-align-items': string;
  '--pagination-gap': string;
  '--pagination-padding': string;
  
  // Item
  '--pagination-item-min-width': string;
  '--pagination-item-height': string;
  '--pagination-item-padding': string;
  '--pagination-item-font-size': string;
  '--pagination-item-font-weight': string;
  '--pagination-item-line-height': string;
  '--pagination-item-color': string;
  '--pagination-item-background': string;
  '--pagination-item-border-width': string;
  '--pagination-item-border-style': string;
  '--pagination-item-border-color': string;
  '--pagination-item-border-radius': string;
  '--pagination-item-cursor': string;
  
  // Item Hover
  '--pagination-item-hover-color': string;
  '--pagination-item-hover-background': string;
  '--pagination-item-hover-border-color': string;
  
  // Item Active
  '--pagination-item-active-color': string;
  '--pagination-item-active-background': string;
  '--pagination-item-active-border-color': string;
  '--pagination-item-active-font-weight': string;
  
  // Item Disabled
  '--pagination-item-disabled-color': string;
  '--pagination-item-disabled-background': string;
  '--pagination-item-disabled-border-color': string;
  '--pagination-item-disabled-cursor': string;
  '--pagination-item-disabled-opacity': string;
  
  // Ellipsis
  '--pagination-ellipsis-color': string;
  
  // Size Changer
  '--pagination-size-changer-min-width': string;
  '--pagination-size-changer-padding': string;
  
  // Quick Jumper
  '--pagination-jumper-input-width': string;
  '--pagination-jumper-input-padding': string;
  '--pagination-jumper-input-border-width': string;
  '--pagination-jumper-input-border-style': string;
  '--pagination-jumper-input-border-color': string;
  '--pagination-jumper-input-border-radius': string;
  '--pagination-jumper-input-focus-border-color': string;
  '--pagination-jumper-input-focus-outline': string;
  
  // Total
  '--pagination-total-color': string;
  '--pagination-total-font-size': string;
  '--pagination-total-margin-right': string;
  
  // Size: Small
  '--pagination-small-item-min-width': string;
  '--pagination-small-item-height': string;
  '--pagination-small-item-font-size': string;
  '--pagination-small-item-padding': string;
  
  // Size: Medium
  '--pagination-medium-item-min-width': string;
  '--pagination-medium-item-height': string;
  '--pagination-medium-item-font-size': string;
  '--pagination-medium-item-padding': string;
  
  // Size: Large
  '--pagination-large-item-min-width': string;
  '--pagination-large-item-height': string;
  '--pagination-large-item-font-size': string;
  '--pagination-large-item-padding': string;
  
  // Animation
  '--pagination-transition-duration': string;
  '--pagination-transition-timing': string;
  
  // Focus States
  '--pagination-focus-outline-width': string;
  '--pagination-focus-outline-style': string;
  '--pagination-focus-outline-color': string;
  '--pagination-focus-outline-offset': string;
}
