import React, { useState, useMemo } from 'react';
import { TableProps, TableColumn, SortOrder } from './Table.types';
import './Table.css';

export const Table = <T extends Record<string, any>>({
  columns,
  dataSource,
  rowKey = 'id',
  size = 'medium',
  bordered = false,
  hoverable = true,
  striped = false,
  loading = false,
  emptyText = 'No Data',
  pagination,
  className = '',
  style,
  cssVariables,
  onRow,
}: TableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  // Initialize sort from defaultSortOrder
  useMemo(() => {
    const defaultSortCol = columns.find(col => col.defaultSortOrder);
    if (defaultSortCol) {
      setSortColumn(defaultSortCol.key);
      setSortOrder(defaultSortCol.defaultSortOrder!);
    }
  }, [columns]);

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sorter) return;

    let newSortOrder: SortOrder;
    if (sortColumn === column.key) {
      newSortOrder = sortOrder === 'ascend' ? 'descend' : sortOrder === 'descend' ? null : 'ascend';
    } else {
      newSortOrder = 'ascend';
    }

    setSortColumn(newSortOrder ? column.key : null);
    setSortOrder(newSortOrder);
  };

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortOrder) return dataSource;

    const column = columns.find(col => col.key === sortColumn);
    if (!column || !column.sorter) return dataSource;

    const sorted = [...dataSource].sort((a, b) => {
      if (typeof column.sorter === 'function') {
        return column.sorter(a, b);
      }

      const aValue = column.dataIndex ? a[column.dataIndex] : a;
      const bValue = column.dataIndex ? b[column.dataIndex] : b;

      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });

    return sortOrder === 'descend' ? sorted.reverse() : sorted;
  }, [dataSource, sortColumn, sortOrder, columns]);

  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;

    const { current = 1, pageSize = 10 } = pagination;
    const start = (current - 1) * pageSize;
    const end = start + pageSize;

    return sortedData.slice(start, end);
  }, [sortedData, pagination]);

  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    return record[rowKey] || String(index);
  };

  const getCellValue = (record: T, column: TableColumn<T>, index: number) => {
    if (column.render) {
      const value = column.dataIndex ? record[column.dataIndex] : record;
      return column.render(value, record, index);
    }
    return column.dataIndex ? record[column.dataIndex] : null;
  };

  const classes = [
    'table',
    `table--${size}`,
    bordered && 'table--bordered',
    hoverable && 'table--hoverable',
    striped && 'table--striped',
    loading && 'table--loading',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={{ ...cssVariables, ...style } as React.CSSProperties}
    >
      <div className="table__container">
        <table className="table__element">
          <thead className="table__header">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`table__header-cell ${column.sorter ? 'table__header-cell--sortable' : ''}`}
                  style={{
                    width: column.width,
                    textAlign: column.align,
                  }}
                  onClick={() => column.sorter && handleSort(column)}
                >
                  <div className="table__header-content">
                    <span>{column.title}</span>
                    {column.sorter && (
                      <span className="table__sort-icon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={sortColumn === column.key && sortOrder === 'ascend' ? 'active' : ''}
                        >
                          <path d="M8 4L11 7H5L8 4Z" fill="currentColor" />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={sortColumn === column.key && sortOrder === 'descend' ? 'active' : ''}
                        >
                          <path d="M8 12L5 9H11L8 12Z" fill="currentColor" />
                        </svg>
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table__body">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="table__empty">
                  {emptyText}
                </td>
              </tr>
            ) : (
              paginatedData.map((record, index) => {
                const key = getRowKey(record, index);
                const rowProps = onRow?.(record, index);

                return (
                  <tr
                    key={key}
                    className="table__row"
                    onClick={rowProps?.onClick}
                    onDoubleClick={rowProps?.onDoubleClick}
                    onContextMenu={rowProps?.onContextMenu}
                  >
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className="table__cell"
                        style={{ textAlign: column.align }}
                      >
                        {getCellValue(record, column, index)}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {loading && (
        <div className="table__loading">
          <div className="table__loading-spinner" />
        </div>
      )}
    </div>
  );
};
