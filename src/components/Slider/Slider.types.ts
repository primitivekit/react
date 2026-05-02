import { CSSProperties } from 'react';

export type SliderSize = 'small' | 'medium' | 'large';

export interface SliderProps {
  /** Current value (controlled) */
  value?: number | [number, number];
  /** Default value (uncontrolled) */
  defaultValue?: number | [number, number];
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Range mode (two handles) */
  range?: boolean;
  /** Show marks */
  marks?: Record<number, string | { label: string; style?: CSSProperties }>;
  /** Show tooltip */
  tooltip?: boolean;
  /** Vertical orientation */
  vertical?: boolean;
  /** Disable slider */
  disabled?: boolean;
  /** Slider size */
  size?: SliderSize;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<SliderCSSVariables>;
  /** Callback when value changes */
  onChange?: (value: number | [number, number]) => void;
  /** Callback after value changes (on mouse up) */
  onAfterChange?: (value: number | [number, number]) => void;
}

export interface SliderCSSVariables {
  // Container
  '--slider-height': string;
  '--slider-padding': string;
  
  // Rail
  '--slider-rail-height': string;
  '--slider-rail-background': string;
  '--slider-rail-border-radius': string;
  
  // Track
  '--slider-track-background': string;
  '--slider-track-height': string;
  '--slider-track-border-radius': string;
  
  // Handle
  '--slider-handle-size': string;
  '--slider-handle-background': string;
  '--slider-handle-border-width': string;
  '--slider-handle-border-style': string;
  '--slider-handle-border-color': string;
  '--slider-handle-border-radius': string;
  '--slider-handle-box-shadow': string;
  '--slider-handle-hover-box-shadow': string;
  '--slider-handle-active-box-shadow': string;
  '--slider-handle-disabled-background': string;
  '--slider-handle-disabled-border-color': string;
  
  // Marks
  '--slider-mark-size': string;
  '--slider-mark-background': string;
  '--slider-mark-active-background': string;
  '--slider-mark-label-font-size': string;
  '--slider-mark-label-color': string;
  '--slider-mark-label-margin-top': string;
  
  // Tooltip
  '--slider-tooltip-background': string;
  '--slider-tooltip-color': string;
  '--slider-tooltip-font-size': string;
  '--slider-tooltip-padding': string;
  '--slider-tooltip-border-radius': string;
  '--slider-tooltip-offset': string;
  
  // Vertical
  '--slider-vertical-width': string;
  '--slider-vertical-height': string;
  '--slider-vertical-rail-width': string;
  '--slider-vertical-track-width': string;
  
  // Size: Small
  '--slider-small-rail-height': string;
  '--slider-small-handle-size': string;
  '--slider-small-mark-size': string;
  
  // Size: Medium
  '--slider-medium-rail-height': string;
  '--slider-medium-handle-size': string;
  '--slider-medium-mark-size': string;
  
  // Size: Large
  '--slider-large-rail-height': string;
  '--slider-large-handle-size': string;
  '--slider-large-mark-size': string;
  
  // Animation
  '--slider-transition-duration': string;
  '--slider-transition-timing': string;
  
  // Focus States
  '--slider-focus-outline-width': string;
  '--slider-focus-outline-style': string;
  '--slider-focus-outline-color': string;
  '--slider-focus-outline-offset': string;
}
