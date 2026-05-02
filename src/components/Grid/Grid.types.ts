import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export interface GridCSSVariables extends CSSProperties {
  '--grid-columns'?: string;
  '--grid-gap'?: string;
  '--grid-row-gap'?: string;
  '--grid-column-gap'?: string;
  '--grid-auto-rows'?: string;
  '--grid-auto-columns'?: string;
}

export interface GridProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  columns?: number | string;
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
  autoRows?: string;
  autoColumns?: string;
  children?: ReactNode;
  className?: string;
  style?: GridCSSVariables;
}
