import React from 'react';
import type { GridProps } from './Grid.types';
import './Grid.css';

const Grid: React.FC<GridProps> = ({
  columns = 12,
  gap,
  rowGap,
  columnGap,
  autoRows,
  autoColumns,
  children,
  className = '',
  style = {},
  ...props
}) => {
  const gridClasses = ['grid', className].filter(Boolean).join(' ');
  
  const columnsValue = typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns;
  const gapValue = typeof gap === 'number' ? `${gap}rem` : gap;
  const rowGapValue = typeof rowGap === 'number' ? `${rowGap}rem` : rowGap;
  const columnGapValue = typeof columnGap === 'number' ? `${columnGap}rem` : columnGap;

  return (
    <div
      className={gridClasses}
      style={{
        '--grid-columns': columnsValue,
        '--grid-gap': gapValue,
        '--grid-row-gap': rowGapValue,
        '--grid-column-gap': columnGapValue,
        '--grid-auto-rows': autoRows,
        '--grid-auto-columns': autoColumns,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
