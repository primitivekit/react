import React from 'react';
import type { BreadcrumbProps, BreadcrumbItem } from './Breadcrumb.types';
import './Breadcrumb.css';

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = 'chevron',
  customSeparator,
  size = 'medium',
  maxItems,
  showHomeIcon = false,
  className = '',
  style = {},
  ariaLabel = 'Breadcrumb',
  onItemClick,
  ...props
}) => {
  const breadcrumbClasses = [
    'breadcrumb',
    `breadcrumb--${size}`,
    `breadcrumb--separator-${separator}`,
    className
  ].filter(Boolean).join(' ');

  const renderSeparator = () => {
    if (separator === 'custom' && customSeparator) {
      return <span className="breadcrumb__separator" aria-hidden="true">{customSeparator}</span>;
    }

    const separators = {
      slash: '/',
      chevron: (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      ),
      arrow: (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      ),
      dot: '•'
    };

    return (
      <span className="breadcrumb__separator" aria-hidden="true">
        {separators[separator as keyof typeof separators]}
      </span>
    );
  };

  const renderHomeIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );

  const handleItemClick = (e: React.MouseEvent, item: BreadcrumbItem) => {
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    if (onItemClick) {
      e.preventDefault();
      onItemClick(item);
    }
  };

  let displayItems = items;
  
  // Handle maxItems with ellipsis
  if (maxItems && items.length > maxItems) {
    const firstItems = items.slice(0, 1);
    const lastItems = items.slice(-(maxItems - 2));
    const ellipsisItem: BreadcrumbItem = {
      id: 'ellipsis',
      label: '...',
      disabled: true
    };
    displayItems = [...firstItems, ellipsisItem, ...lastItems];
  }

  return (
    <nav
      className={breadcrumbClasses}
      style={style}
      aria-label={ariaLabel}
      {...props}
    >
      <ol className="breadcrumb__list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isFirst = index === 0;
          const itemClasses = [
            'breadcrumb__item',
            isLast ? 'breadcrumb__item--current' : '',
            item.disabled ? 'breadcrumb__item--disabled' : ''
          ].filter(Boolean).join(' ');

          return (
            <li key={item.id} className={itemClasses}>
              {item.href && !item.disabled && !isLast ? (
                <a
                  href={item.href}
                  className="breadcrumb__link"
                  aria-current={item.ariaCurrent}
                  onClick={(e) => handleItemClick(e, item)}
                >
                  {isFirst && showHomeIcon && (
                    <span className="breadcrumb__icon" aria-hidden="true">
                      {renderHomeIcon()}
                    </span>
                  )}
                  {item.icon && !showHomeIcon && (
                    <span className="breadcrumb__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="breadcrumb__label">{item.label}</span>
                </a>
              ) : (
                <span
                  className="breadcrumb__text"
                  aria-current={isLast ? 'page' : item.ariaCurrent}
                >
                  {isFirst && showHomeIcon && (
                    <span className="breadcrumb__icon" aria-hidden="true">
                      {renderHomeIcon()}
                    </span>
                  )}
                  {item.icon && !showHomeIcon && (
                    <span className="breadcrumb__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="breadcrumb__label">{item.label}</span>
                </span>
              )}
              {!isLast && renderSeparator()}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
