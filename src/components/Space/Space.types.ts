import { ReactNode, CSSProperties } from 'react';

export type SpaceSize = 'small' | 'medium' | 'large' | number;
export type SpaceDirection = 'horizontal' | 'vertical';
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';

export interface SpaceCSSVariables extends CSSProperties {
  '--space-gap'?: string;
  '--space-direction'?: string;
  '--space-align'?: string;
  '--space-wrap'?: string;
}

export interface SpaceProps {
  children: ReactNode;
  size?: SpaceSize;
  direction?: SpaceDirection;
  align?: SpaceAlign;
  wrap?: boolean;
  className?: string;
  style?: SpaceCSSVariables;
}
