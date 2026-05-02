import { ReactNode, CSSProperties } from 'react';

/**
 * Modal size variants
 */
export type ModalSize = 'small' | 'medium' | 'large' | 'full';

/**
 * Comprehensive CSS variable customization interface
 */
export interface ModalCSSVariables extends CSSProperties {
  /* Overlay */
  '--modal-overlay-bg-color'?: string;
  '--modal-overlay-opacity'?: string | number;
  '--modal-overlay-backdrop-filter'?: string;
  '--modal-overlay-z-index'?: string | number;
  
  /* Container */
  '--modal-bg-color'?: string;
  '--modal-color'?: string;
  '--modal-border-radius'?: string;
  '--modal-border-width'?: string;
  '--modal-border-color'?: string;
  '--modal-box-shadow'?: string;
  '--modal-max-width'?: string;
  '--modal-max-height'?: string;
  '--modal-width'?: string;
  '--modal-height'?: string;
  '--modal-margin'?: string;
  '--modal-z-index'?: string | number;
  
  /* Header */
  '--modal-header-bg-color'?: string;
  '--modal-header-color'?: string;
  '--modal-header-padding-top'?: string;
  '--modal-header-padding-right'?: string;
  '--modal-header-padding-bottom'?: string;
  '--modal-header-padding-left'?: string;
  '--modal-header-padding-y'?: string;
  '--modal-header-padding-x'?: string;
  '--modal-header-border-bottom-width'?: string;
  '--modal-header-border-bottom-color'?: string;
  '--modal-header-font-size'?: string;
  '--modal-header-font-weight'?: string | number;
  '--modal-header-line-height'?: string | number;
  
  /* Body */
  '--modal-body-bg-color'?: string;
  '--modal-body-color'?: string;
  '--modal-body-padding-top'?: string;
  '--modal-body-padding-right'?: string;
  '--modal-body-padding-bottom'?: string;
  '--modal-body-padding-left'?: string;
  '--modal-body-padding-y'?: string;
  '--modal-body-padding-x'?: string;
  '--modal-body-font-size'?: string;
  '--modal-body-line-height'?: string | number;
  '--modal-body-max-height'?: string;
  
  /* Footer */
  '--modal-footer-bg-color'?: string;
  '--modal-footer-padding-top'?: string;
  '--modal-footer-padding-right'?: string;
  '--modal-footer-padding-bottom'?: string;
  '--modal-footer-padding-left'?: string;
  '--modal-footer-padding-y'?: string;
  '--modal-footer-padding-x'?: string;
  '--modal-footer-border-top-width'?: string;
  '--modal-footer-border-top-color'?: string;
  '--modal-footer-gap'?: string;
  '--modal-footer-justify-content'?: string;
  
  /* Close Button */
  '--modal-close-size'?: string;
  '--modal-close-color'?: string;
  '--modal-close-color-hover'?: string;
  '--modal-close-bg-color'?: string;
  '--modal-close-bg-color-hover'?: string;
  '--modal-close-border-radius'?: string;
  '--modal-close-top'?: string;
  '--modal-close-right'?: string;
  
  /* Animations */
  '--modal-animation-duration'?: string;
  '--modal-animation-timing'?: string;
  '--modal-overlay-animation-duration'?: string;
  '--modal-overlay-animation-timing'?: string;
}

/**
 * Modal component props
 */
export interface ModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  
  /**
   * Callback when modal should close
   */
  onClose: () => void;
  
  /**
   * Modal title
   */
  title?: ReactNode;
  
  /**
   * Modal body content
   */
  children: ReactNode;
  
  /**
   * Modal footer content
   */
  footer?: ReactNode;
  
  /**
   * Modal size
   * @default 'medium'
   */
  size?: ModalSize;
  
  /**
   * Show close button
   * @default true
   */
  showCloseButton?: boolean;
  
  /**
   * Close on overlay click
   * @default true
   */
  closeOnOverlayClick?: boolean;
  
  /**
   * Close on escape key
   * @default true
   */
  closeOnEscape?: boolean;
  
  /**
   * Prevent body scroll when modal is open
   * @default true
   */
  preventScroll?: boolean;
  
  /**
   * Center modal vertically
   * @default true
   */
  centered?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Inline styles with CSS variable support
   */
  style?: ModalCSSVariables;
  
  /**
   * Accessible label
   */
  ariaLabel?: string;
  
  /**
   * ID of element that describes the modal
   */
  ariaDescribedBy?: string;
}
