import { ReactNode, CSSProperties } from 'react';

export type UploadListType = 'text' | 'picture' | 'picture-card';

export interface UploadFile {
  uid: string;
  name: string;
  status?: 'uploading' | 'done' | 'error';
  percent?: number;
  url?: string;
  thumbUrl?: string;
  response?: any;
  error?: any;
}

export interface UploadProps {
  /** Accept file types */
  accept?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** Maximum file count */
  maxCount?: number;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** File list (controlled) */
  fileList?: UploadFile[];
  /** Default file list (uncontrolled) */
  defaultFileList?: UploadFile[];
  /** List display type */
  listType?: UploadListType;
  /** Show upload list */
  showUploadList?: boolean;
  /** Disable upload */
  disabled?: boolean;
  /** Upload button/area content */
  children?: ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<UploadCSSVariables>;
  /** Before upload validation */
  beforeUpload?: (file: File) => boolean | Promise<boolean>;
  /** Custom upload request */
  customRequest?: (options: {
    file: File;
    onProgress: (percent: number) => void;
    onSuccess: (response: any) => void;
    onError: (error: any) => void;
  }) => void;
  /** Callback when file list changes */
  onChange?: (fileList: UploadFile[]) => void;
  /** Callback when file is removed */
  onRemove?: (file: UploadFile) => void;
}

export interface UploadCSSVariables {
  // Container
  '--upload-border-width': string;
  '--upload-border-style': string;
  '--upload-border-color': string;
  '--upload-border-radius': string;
  '--upload-background': string;
  '--upload-padding': string;
  '--upload-min-height': string;
  '--upload-cursor': string;
  
  // Hover
  '--upload-hover-border-color': string;
  '--upload-hover-background': string;
  
  // Disabled
  '--upload-disabled-background': string;
  '--upload-disabled-border-color': string;
  '--upload-disabled-cursor': string;
  '--upload-disabled-opacity': string;
  
  // Drag
  '--upload-drag-border-color': string;
  '--upload-drag-background': string;
  
  // List
  '--upload-list-gap': string;
  '--upload-list-item-padding': string;
  '--upload-list-item-background': string;
  '--upload-list-item-border-width': string;
  '--upload-list-item-border-style': string;
  '--upload-list-item-border-color': string;
  '--upload-list-item-border-radius': string;
  '--upload-list-item-hover-background': string;
  
  // List Item Icon
  '--upload-list-icon-size': string;
  '--upload-list-icon-color': string;
  '--upload-list-icon-margin-right': string;
  
  // List Item Name
  '--upload-list-name-font-size': string;
  '--upload-list-name-color': string;
  '--upload-list-name-flex': string;
  
  // List Item Actions
  '--upload-list-action-size': string;
  '--upload-list-action-color': string;
  '--upload-list-action-hover-color': string;
  '--upload-list-action-margin-left': string;
  
  // Progress
  '--upload-progress-height': string;
  '--upload-progress-background': string;
  '--upload-progress-bar-background': string;
  '--upload-progress-border-radius': string;
  
  // Picture Card
  '--upload-picture-card-size': string;
  '--upload-picture-card-border-width': string;
  '--upload-picture-card-border-style': string;
  '--upload-picture-card-border-color': string;
  '--upload-picture-card-border-radius': string;
  '--upload-picture-card-background': string;
  
  // Status Colors
  '--upload-status-uploading-color': string;
  '--upload-status-done-color': string;
  '--upload-status-error-color': string;
  
  // Animation
  '--upload-transition-duration': string;
  '--upload-transition-timing': string;
}
