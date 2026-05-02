import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type StackDirection = 'horizontal' | 'vertical';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface StackCSSVariables extends CSSProperties {
  '--stack-gap'?: string;
  '--stack-direction'?: string;
  '--stack-align-items'?: string;
  '--stack-justify-content'?: string;
}

export interface StackProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  direction?: StackDirection;
  align?: StackAlign;
  justify?: StackJustify;
  gap?: string | number;
  wrap?: boolean;
  children?: ReactNode;
  className?: string;
  style?: StackCSSVariables;
}
