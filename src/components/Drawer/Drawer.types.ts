import { ReactNode, CSSProperties } from 'react';

export type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left';
export type DrawerSize = 'small' | 'medium' | 'large';

export interface DrawerProps {
  /** Whether the drawer is visible */
  open: boolean;
  /** Drawer title */
  title?: ReactNode;
  /** Drawer placement */
  placement?: DrawerPlacement;
  /** Drawer size */
  size?: DrawerSize;
  /** Custom width (for left/right placement) */
  width?: string | number;
  /** Custom height (for top/bottom placement) */
  height?: string | number;
  /** Drawer content */
  children: ReactNode;
  /** Footer content */
  footer?: ReactNode;
  /** Show close button */
  closable?: boolean;
  /** Show mask */
  mask?: boolean;
  /** Close drawer when mask is clicked */
  maskClosable?: boolean;
  /** Close drawer when ESC is pressed */
  keyboard?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<DrawerCSSVariables>;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Callback after drawer is opened */
  afterOpenChange?: (open: boolean) => void;
}

export interface DrawerCSSVariables {
  // Mask
  '--drawer-mask-background': string;
  '--drawer-mask-z-index': string;
  '--drawer-mask-opacity': string;
  '--drawer-mask-backdrop-filter': string;
  
  // Container
  '--drawer-z-index': string;
  '--drawer-background': string;
  '--drawer-box-shadow': string;
  
  // Header
  '--drawer-header-padding': string;
  '--drawer-header-background': string;
  '--drawer-header-border-bottom-width': string;
  '--drawer-header-border-bottom-style': string;
  '--drawer-header-border-bottom-color': string;
  
  // Title
  '--drawer-title-font-size': string;
  '--drawer-title-font-weight': string;
  '--drawer-title-line-height': string;
  '--drawer-title-color': string;
  
  // Close Button
  '--drawer-close-size': string;
  '--drawer-close-color': string;
  '--drawer-close-hover-color': string;
  '--drawer-close-hover-background': string;
  '--drawer-close-border-radius': string;
  
  // Body
  '--drawer-body-padding': string;
  '--drawer-body-color': string;
  '--drawer-body-font-size': string;
  '--drawer-body-line-height': string;
  '--drawer-body-overflow': string;
  
  // Footer
  '--drawer-footer-padding': string;
  '--drawer-footer-background': string;
  '--drawer-footer-border-top-width': string;
  '--drawer-footer-border-top-style': string;
  '--drawer-footer-border-top-color': string;
  '--drawer-footer-text-align': string;
  
  // Size: Small
  '--drawer-small-width': string;
  '--drawer-small-height': string;
  
  // Size: Medium
  '--drawer-medium-width': string;
  '--drawer-medium-height': string;
  
  // Size: Large
  '--drawer-large-width': string;
  '--drawer-large-height': string;
  
  // Placement: Top
  '--drawer-top-top': string;
  '--drawer-top-left': string;
  '--drawer-top-right': string;
  '--drawer-top-transform-closed': string;
  '--drawer-top-transform-open': string;
  
  // Placement: Right
  '--drawer-right-top': string;
  '--drawer-right-right': string;
  '--drawer-right-bottom': string;
  '--drawer-right-transform-closed': string;
  '--drawer-right-transform-open': string;
  
  // Placement: Bottom
  '--drawer-bottom-bottom': string;
  '--drawer-bottom-left': string;
  '--drawer-bottom-right': string;
  '--drawer-bottom-transform-closed': string;
  '--drawer-bottom-transform-open': string;
  
  // Placement: Left
  '--drawer-left-top': string;
  '--drawer-left-left': string;
  '--drawer-left-bottom': string;
  '--drawer-left-transform-closed': string;
  '--drawer-left-transform-open': string;
  
  // Animation
  '--drawer-transition-duration': string;
  '--drawer-transition-timing': string;
  '--drawer-animation-duration': string;
  '--drawer-animation-timing': string;
}
