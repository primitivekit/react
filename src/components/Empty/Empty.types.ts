import { ReactNode, CSSProperties } from 'react';

export type EmptySize = 'small' | 'medium' | 'large';

export interface EmptyProps {
  /** Description text */
  description?: ReactNode;
  /** Custom image or icon */
  image?: ReactNode;
  /** Size of the empty state */
  size?: EmptySize;
  /** Additional content below description */
  children?: ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<EmptyCSSVariables>;
}

export interface EmptyCSSVariables {
  // Container
  '--empty-padding': string;
  '--empty-text-align': string;
  '--empty-max-width': string;
  '--empty-margin': string;
  
  // Image/Icon
  '--empty-image-width': string;
  '--empty-image-height': string;
  '--empty-image-margin-bottom': string;
  '--empty-image-opacity': string;
  '--empty-image-filter': string;
  
  // Description
  '--empty-description-font-size': string;
  '--empty-description-font-weight': string;
  '--empty-description-line-height': string;
  '--empty-description-color': string;
  '--empty-description-margin-top': string;
  '--empty-description-margin-bottom': string;
  
  // Content
  '--empty-content-margin-top': string;
  '--empty-content-font-size': string;
  '--empty-content-color': string;
  
  // Size: Small
  '--empty-small-image-width': string;
  '--empty-small-image-height': string;
  '--empty-small-description-font-size': string;
  '--empty-small-content-font-size': string;
  '--empty-small-padding': string;
  
  // Size: Medium
  '--empty-medium-image-width': string;
  '--empty-medium-image-height': string;
  '--empty-medium-description-font-size': string;
  '--empty-medium-content-font-size': string;
  '--empty-medium-padding': string;
  
  // Size: Large
  '--empty-large-image-width': string;
  '--empty-large-image-height': string;
  '--empty-large-description-font-size': string;
  '--empty-large-content-font-size': string;
  '--empty-large-padding': string;
  
  // Hover States
  '--empty-hover-opacity': string;
  '--empty-hover-transform': string;
  
  // Animation
  '--empty-transition-duration': string;
  '--empty-transition-timing': string;
  '--empty-animation-duration': string;
  '--empty-animation-timing': string;
}
