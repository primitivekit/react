import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type AlertVariant = 'solid' | 'subtle' | 'left-accent' | 'top-accent';
export type AlertStatus = 'info' | 'success' | 'warning' | 'error';

export interface AlertCSSVariables extends CSSProperties {
  '--alert-bg-color'?: string;
  '--alert-text-color'?: string;
  '--alert-border-color'?: string;
  '--alert-icon-color'?: string;
  '--alert-padding'?: string;
  '--alert-border-radius'?: string;
}

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  variant?: AlertVariant;
  status?: AlertStatus;
  title?: string;
  children?: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
  className?: string;
  style?: AlertCSSVariables;
}
