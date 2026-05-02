import { ImgHTMLAttributes, ReactNode, CSSProperties } from 'react';

export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'placeholder'> {
  /** Image source URL */
  src: string;
  /** Alternative text */
  alt: string;
  /** Image width */
  width?: string | number;
  /** Image height */
  height?: string | number;
  /** Object fit style */
  fit?: ImageFit;
  /** Placeholder content while loading */
  placeholder?: ReactNode;
  /** Fallback content on error */
  fallback?: ReactNode;
  /** Enable preview on click */
  preview?: boolean;
  /** Custom preview src (if different from main src) */
  previewSrc?: string;
  /** Loading state */
  loading?: 'lazy' | 'eager';
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<ImageCSSVariables>;
  /** Callback when image loads */
  onLoad?: () => void;
  /** Callback when image fails to load */
  onError?: () => void;
}

export interface ImageCSSVariables {
  // Container
  '--image-display': string;
  '--image-position': string;
  '--image-overflow': string;
  '--image-border-radius': string;
  '--image-background': string;
  
  // Image
  '--image-width': string;
  '--image-height': string;
  '--image-object-fit': string;
  '--image-object-position': string;
  '--image-opacity': string;
  '--image-filter': string;
  
  // Placeholder
  '--image-placeholder-background': string;
  '--image-placeholder-color': string;
  '--image-placeholder-display': string;
  '--image-placeholder-align-items': string;
  '--image-placeholder-justify-content': string;
  
  // Fallback
  '--image-fallback-background': string;
  '--image-fallback-color': string;
  '--image-fallback-font-size': string;
  '--image-fallback-display': string;
  '--image-fallback-align-items': string;
  '--image-fallback-justify-content': string;
  
  // Preview Overlay
  '--image-preview-overlay-background': string;
  '--image-preview-overlay-opacity': string;
  '--image-preview-overlay-backdrop-filter': string;
  '--image-preview-icon-color': string;
  '--image-preview-icon-size': string;
  '--image-preview-icon-opacity': string;
  
  // Preview Modal
  '--image-preview-modal-background': string;
  '--image-preview-modal-z-index': string;
  '--image-preview-modal-padding': string;
  '--image-preview-image-max-width': string;
  '--image-preview-image-max-height': string;
  '--image-preview-close-color': string;
  '--image-preview-close-size': string;
  '--image-preview-close-top': string;
  '--image-preview-close-right': string;
  '--image-preview-close-hover-color': string;
  
  // Loading State
  '--image-loading-opacity': string;
  '--image-loading-filter': string;
  
  // Hover States
  '--image-hover-opacity': string;
  '--image-hover-transform': string;
  '--image-hover-filter': string;
  
  // Animation
  '--image-transition-duration': string;
  '--image-transition-timing': string;
  '--image-animation-duration': string;
  '--image-animation-timing': string;
}
