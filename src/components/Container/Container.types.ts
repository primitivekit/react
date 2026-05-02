import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ContainerCSSVariables extends CSSProperties {
  '--container-max-width'?: string;
  '--container-padding-x'?: string;
  '--container-padding-y'?: string;
}

export interface ContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  size?: ContainerSize;
  children?: ReactNode;
  className?: string;
  style?: ContainerCSSVariables;
  centerContent?: boolean;
}
