import { ReactNode, CSSProperties } from 'react';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type TagSize = 'small' | 'medium' | 'large';

export interface TagCSSVariables extends CSSProperties {
  '--tag-bg-color'?: string;
  '--tag-color'?: string;
  '--tag-border-color'?: string;
  '--tag-border-radius'?: string;
  '--tag-padding-x'?: string;
  '--tag-padding-y'?: string;
  '--tag-font-size'?: string;
}

export interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  closable?: boolean;
  onClose?: () => void;
  icon?: ReactNode;
  className?: string;
  style?: TagCSSVariables;
}
