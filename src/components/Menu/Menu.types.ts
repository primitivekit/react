import { ReactNode, CSSProperties } from 'react';

export type MenuMode = 'vertical' | 'horizontal' | 'inline';
export type MenuTheme = 'light' | 'dark';

export interface MenuItem {
  /** Unique key for the menu item */
  key: string;
  /** Menu item label */
  label: ReactNode;
  /** Icon before label */
  icon?: ReactNode;
  /** Disable this menu item */
  disabled?: boolean;
  /** Submenu items */
  children?: MenuItem[];
  /** Click handler */
  onClick?: () => void;
}

export interface MenuProps {
  /** Menu items */
  items: MenuItem[];
  /** Menu mode */
  mode?: MenuMode;
  /** Menu theme */
  theme?: MenuTheme;
  /** Selected keys (controlled) */
  selectedKeys?: string[];
  /** Default selected keys (uncontrolled) */
  defaultSelectedKeys?: string[];
  /** Open keys for submenus (controlled) */
  openKeys?: string[];
  /** Default open keys (uncontrolled) */
  defaultOpenKeys?: string[];
  /** Allow multiple selection */
  multiple?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<MenuCSSVariables>;
  /** Callback when menu item is selected */
  onSelect?: (key: string) => void;
  /** Callback when submenu is opened/closed */
  onOpenChange?: (openKeys: string[]) => void;
}

export interface MenuCSSVariables {
  // Container
  '--menu-background': string;
  '--menu-border-width': string;
  '--menu-border-style': string;
  '--menu-border-color': string;
  '--menu-border-radius': string;
  '--menu-padding': string;
  '--menu-min-width': string;
  
  // Item
  '--menu-item-padding': string;
  '--menu-item-margin': string;
  '--menu-item-height': string;
  '--menu-item-line-height': string;
  '--menu-item-font-size': string;
  '--menu-item-font-weight': string;
  '--menu-item-color': string;
  '--menu-item-background': string;
  '--menu-item-border-radius': string;
  '--menu-item-cursor': string;
  
  // Item Hover
  '--menu-item-hover-color': string;
  '--menu-item-hover-background': string;
  
  // Item Active/Selected
  '--menu-item-active-color': string;
  '--menu-item-active-background': string;
  '--menu-item-active-border-color': string;
  '--menu-item-active-border-width': string;
  
  // Item Disabled
  '--menu-item-disabled-color': string;
  '--menu-item-disabled-background': string;
  '--menu-item-disabled-cursor': string;
  '--menu-item-disabled-opacity': string;
  
  // Icon
  '--menu-icon-size': string;
  '--menu-icon-margin-right': string;
  '--menu-icon-color': string;
  
  // Submenu
  '--menu-submenu-background': string;
  '--menu-submenu-padding': string;
  '--menu-submenu-margin': string;
  '--menu-submenu-border-radius': string;
  '--menu-submenu-box-shadow': string;
  
  // Submenu Title
  '--menu-submenu-title-padding': string;
  '--menu-submenu-title-font-weight': string;
  
  // Arrow
  '--menu-arrow-size': string;
  '--menu-arrow-color': string;
  '--menu-arrow-margin-left': string;
  '--menu-arrow-transition-duration': string;
  '--menu-arrow-rotate-open': string;
  
  // Mode: Horizontal
  '--menu-horizontal-item-margin': string;
  '--menu-horizontal-item-border-bottom-width': string;
  
  // Mode: Inline
  '--menu-inline-indent': string;
  '--menu-inline-submenu-background': string;
  
  // Theme: Dark
  '--menu-dark-background': string;
  '--menu-dark-item-color': string;
  '--menu-dark-item-hover-background': string;
  '--menu-dark-item-active-color': string;
  '--menu-dark-item-active-background': string;
  '--menu-dark-submenu-background': string;
  
  // Animation
  '--menu-transition-duration': string;
  '--menu-transition-timing': string;
  
  // Focus States
  '--menu-focus-outline-width': string;
  '--menu-focus-outline-style': string;
  '--menu-focus-outline-color': string;
  '--menu-focus-outline-offset': string;
}
