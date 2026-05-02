import React, { useState } from 'react';
import { PaginationProps } from './Pagination.types';
import './Pagination.css';

export const Pagination: React.FC<PaginationProps> = ({
  current: controlledCurrent,
  defaultCurrent = 1,
  total,
  pageSize: controlledPageSize,
  defaultPageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  showSizeChanger = false,
  showQuickJumper = false,
  showTotal = false,
  size = 'medium',
  disabled = false,
  simple = false,
  className = '',
  style,
  cssVariables,
  onChange,
  onShowSizeChange,
}) => {
  const [uncontrolledCurrent, setUncontrolledCurrent] = useState(defaultCurrent);
  const [uncontrolledPageSize, setUncontrolledPageSize] = useState(defaultPageSize);
  const [jumpValue, setJumpValue] = useState('');

  const isCurrentControlled = controlledCurrent !== undefined;
  const isPageSizeControlled = controlledPageSize !== undefined;

  const current = isCurrentControlled ? controlledCurrent : uncontrolledCurrent;
  const pageSize = isPageSizeControlled ? controlledPageSize : uncontrolledPageSize;

  const totalPages = Math.ceil(total / pageSize);
  const startItem = (current - 1) * pageSize + 1;
  const endItem = Math.min(current * pageSize, total);

  const handlePageChange = (page: number) => {
    if (disabled || page < 1 || page > totalPages || page === current) return;

    if (!isCurrentControlled) {
      setUncontrolledCurrent(page);
    }

    onChange?.(page, pageSize);
  };

  const handlePageSizeChange = (newSize: number) => {
    const newTotalPages = Math.ceil(total / newSize);
    const newCurrent = current > newTotalPages ? newTotalPages : current;

    if (!isPageSizeControlled) {
      setUncontrolledPageSize(newSize);
    }

    if (!isCurrentControlled && newCurrent !== current) {
      setUncontrolledCurrent(newCurrent);
    }

    onShowSizeChange?.(newCurrent, newSize);
    onChange?.(newCurrent, newSize);
  };

  const handleJump = () => {
    const page = parseInt(jumpValue, 10);
    if (!isNaN(page)) {
      handlePageChange(page);
      setJumpValue('');
    }
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showPages = 5;

    if (totalPages <= showPages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (current <= 3) {
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis-end');
      } else if (current >= totalPages - 2) {
        pages.push('ellipsis-start');
        for (let i = totalPages - 3; i < totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push('ellipsis-start');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis-end');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const classes = [
    'pagination',
    `pagination--${size}`,
    simple && 'pagination--simple',
    disabled && 'pagination--disabled',
    className,
  ].filter(Boolean).join(' ');

  if (simple) {
    return (
      <div
        className={classes}
        style={{ ...cssVariables, ...style } as React.CSSProperties}
      >
        <button
          className="pagination__item pagination__prev"
          onClick={() => handlePageChange(current - 1)}
          disabled={disabled || current === 1}
          aria-label="Previous page"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="pagination__simple-text">
          {current} / {totalPages}
        </span>
        <button
          className="pagination__item pagination__next"
          onClick={() => handlePageChange(current + 1)}
          disabled={disabled || current === totalPages}
          aria-label="Next page"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div
      className={classes}
      style={{ ...cssVariables, ...style } as React.CSSProperties}
      role="navigation"
      aria-label="Pagination"
    >
      {showTotal && (
        <div className="pagination__total">
          {typeof showTotal === 'function'
            ? showTotal(total, [startItem, endItem])
            : `Total ${total} items`}
        </div>
      )}

      <button
        className="pagination__item pagination__prev"
        onClick={() => handlePageChange(current - 1)}
        disabled={disabled || current === 1}
        aria-label="Previous page"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {renderPageNumbers().map((page, index) => {
        if (typeof page === 'string') {
          return (
            <span key={page} className="pagination__ellipsis">
              •••
            </span>
          );
        }

        return (
          <button
            key={page}
            className={`pagination__item ${page === current ? 'pagination__item--active' : ''}`}
            onClick={() => handlePageChange(page)}
            disabled={disabled}
            aria-label={`Page ${page}`}
            aria-current={page === current ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        className="pagination__item pagination__next"
        onClick={() => handlePageChange(current + 1)}
        disabled={disabled || current === totalPages}
        aria-label="Next page"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {showSizeChanger && (
        <select
          className="pagination__size-changer"
          value={pageSize}
          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          disabled={disabled}
          aria-label="Items per page"
        >
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option} / page
            </option>
          ))}
        </select>
      )}

      {showQuickJumper && (
        <div className="pagination__jumper">
          <span>Go to</span>
          <input
            type="number"
            className="pagination__jumper-input"
            value={jumpValue}
            onChange={(e) => setJumpValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleJump()}
            disabled={disabled}
            min={1}
            max={totalPages}
            aria-label="Jump to page"
          />
        </div>
      )}
    </div>
  );
};
