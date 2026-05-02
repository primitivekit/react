import { ReactNode, CSSProperties, HTMLAttributes } from 'react';

/**
 * Typography variant
 */
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';

/**
 * Typography weight
 */
export type TypographyWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

/**
 * Typography align
 */
export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

/**
 * Comprehensive CSS variable customization interface
 */
export interface TypographyCSSVariables extends CSSProperties {
  /* Typography */
  '--typography-font-family'?: string;
  '--typography-font-size'?: string;
  '--typography-font-weight'?: string | number;
  '--typography-line-height'?: string | number;
  '--typography-letter-spacing'?: string;
  '--typography-text-align'?: string;
  '--typography-text-transform'?: string;
  '--typography-text-decoration'?: string;
  '--typography-color'?: string;
  
  /* Spacing */
  '--typography-margin-top'?: string;
  '--typography-margin-right'?: string;
  '--typography-margin-bottom'?: string;
  '--typography-margin-left'?: string;
  
  /* Effects */
  '--typography-text-shadow'?: string;
  '--typography-opacity'?: string | number;
}

/**
 * Typography component props
 */
export interface TypographyProps extends Omit<HTMLAttributes<HTMLElement>, 'style'> {
  /**
   * Content
   */
  children: ReactNode;
  
  /**
   * Typography variant
   * @default 'body1'
   */
  variant?: TypographyVariant;
  
  /**
   * Font weight
   */
  weight?: TypographyWeight;
  
  /**
   * Text alignment
   */
  align?: TypographyAlign;
  
  /**
   * Text color
   */
  color?: string;
  
  /**
   * Truncate text with ellipsis
   * @default false
   */
  ellipsis?: boolean;
  
  /**
   * Number of lines before truncating (requires ellipsis)
   */
  lineClamp?: number;
  
  /**
   * Render as specific HTML element
   */
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Inline styles with CSS variable support
   */
  style?: TypographyCSSVariables;
}
