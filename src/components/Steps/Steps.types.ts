import { ReactNode, CSSProperties } from 'react';

export type StepsDirection = 'horizontal' | 'vertical';
export type StepsSize = 'small' | 'medium' | 'large';
export type StepStatus = 'wait' | 'process' | 'finish' | 'error';

export interface StepItem {
  /** Step title */
  title: ReactNode;
  /** Step description */
  description?: ReactNode;
  /** Step icon */
  icon?: ReactNode;
  /** Step status */
  status?: StepStatus;
  /** Disable this step */
  disabled?: boolean;
}

export interface StepsProps {
  /** Steps items */
  items: StepItem[];
  /** Current step (0-indexed) */
  current?: number;
  /** Steps direction */
  direction?: StepsDirection;
  /** Steps size */
  size?: StepsSize;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<StepsCSSVariables>;
  /** Callback when step is clicked */
  onChange?: (current: number) => void;
}

export interface StepsCSSVariables {
  '--steps-gap': string;
  '--steps-icon-size': string;
  '--steps-icon-font-size': string;
  '--steps-icon-border-width': string;
  '--steps-icon-border-radius': string;
  '--steps-title-font-size': string;
  '--steps-title-font-weight': string;
  '--steps-title-color': string;
  '--steps-description-font-size': string;
  '--steps-description-color': string;
  '--steps-tail-width': string;
  '--steps-tail-color': string;
  '--steps-wait-icon-background': string;
  '--steps-wait-icon-border-color': string;
  '--steps-wait-icon-color': string;
  '--steps-process-icon-background': string;
  '--steps-process-icon-border-color': string;
  '--steps-process-icon-color': string;
  '--steps-finish-icon-background': string;
  '--steps-finish-icon-border-color': string;
  '--steps-finish-icon-color': string;
  '--steps-error-icon-background': string;
  '--steps-error-icon-border-color': string;
  '--steps-error-icon-color': string;
  '--steps-transition-duration': string;
}
