import { ReactNode, CSSProperties } from 'react';

export type TableSize = 'small' | 'medium' | 'large';
export type SortOrder = 'ascend' | 'descend' | null;

export interface TableColumn<T = any> {
  /** Column key */
  key: string;
  /** Column title */
  title: ReactNode;
  /** Data index */
  dataIndex?: string;
  /** Custom render function */
  render?: (value: any, record: T, index: number) => ReactNode;
  /** Column width */
  width?: string | number;
  /** Column alignment */
  align?: 'left' | 'center' | 'right';
  /** Enable sorting */
  sorter?: boolean | ((a: T, b: T) => number);
  /** Default sort order */
  defaultSortOrder?: SortOrder;
  /** Fixed column */
  fixed?: 'left' | 'right';
}

export interface TableProps<T = any> {
  /** Table columns */
  columns: TableColumn<T>[];
  /** Table data source */
  dataSource: T[];
  /** Row key */
  rowKey?: string | ((record: T) => string);
  /** Table size */
  size?: TableSize;
  /** Show border */
  bordered?: boolean;
  /** Enable row hover */
  hoverable?: boolean;
  /** Enable striped rows */
  striped?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Empty text */
  emptyText?: ReactNode;
  /** Pagination config */
  pagination?: false | {
    current?: number;
    pageSize?: number;
    total?: number;
    onChange?: (page: number, pageSize: number) => void;
  };
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Custom CSS variables */
  cssVariables?: Partial<TableCSSVariables>;
  /** Row click handler */
  onRow?: (record: T, index: number) => {
    onClick?: () => void;
    onDoubleClick?: () => void;
    onContextMenu?: () => void;
  };
}

export interface TableCSSVariables {
  // Container
  '--table-border-width': string;
  '--table-border-style': string;
  '--table-border-color': string;
  '--table-border-radius': string;
  '--table-background': string;
  
  // Header
  '--table-header-background': string;
  '--table-header-color': string;
  '--table-header-font-weight': string;
  '--table-header-padding': string;
  '--table-header-border-bottom-width': string;
  '--table-header-border-bottom-color': string;
  
  // Body
  '--table-body-background': string;
  '--table-body-color': string;
  
  // Cell
  '--table-cell-padding': string;
  '--table-cell-border-width': string;
  '--table-cell-border-color': string;
  
  // Row
  '--table-row-hover-background': string;
  '--table-row-striped-background': string;
  
  // Sort
  '--table-sort-icon-color': string;
  '--table-sort-icon-active-color': string;
  '--table-sort-icon-size': string;
  
  // Loading
  '--table-loading-background': string;
  '--table-loading-opacity': string;
  
  // Empty
  '--table-empty-padding': string;
  '--table-empty-color': string;
  '--table-empty-font-size': string;
  
  // Size: Small
  '--table-small-cell-padding': string;
  '--table-small-header-padding': string;
  
  // Size: Medium
  '--table-medium-cell-padding': string;
  '--table-medium-header-padding': string;
  
  // Size: Large
  '--table-large-cell-padding': string;
  '--table-large-header-padding': string;
  
  // Animation
  '--table-transition-duration': string;
  '--table-transition-timing': string;
}
