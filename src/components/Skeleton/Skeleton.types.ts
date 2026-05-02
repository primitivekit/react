import { CSSProperties, HTMLAttributes } from 'react';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';

export interface SkeletonCSSVariables extends CSSProperties {
  '--skeleton-bg-color'?: string;
  '--skeleton-animation-duration'?: string;
  '--skeleton-width'?: string;
  '--skeleton-height'?: string;
  '--skeleton-border-radius'?: string;
}

export interface SkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  count?: number;
  className?: string;
  style?: SkeletonCSSVariables;
}
