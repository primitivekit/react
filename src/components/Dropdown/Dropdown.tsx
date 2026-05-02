import React, { useState, useRef, useEffect } from 'react';
import type { DropdownProps, DropdownItem } from './Dropdown.types';
import './Dropdown.css';

const Dropdown: React.FC<DropdownProps> = ({
  items,
  children,
  placement = 'bottom-start',
  closeOnClick = true,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  isOpen: controlledIsOpen,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  className = '',
  style = {},
  ariaLabel = 'Dropdown menu',
  ...props
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const setIsOpen = (open: boolean) => {
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(open);
    }
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled) return;
    
    if (item.onClick) {
      item.onClick();
    }
    
    if (closeOnClick) {
      handleClose();
    }
  };

  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        triggerRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnOutsideClick]);

  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape]);

  const dropdownClasses = [
    'dropdown',
    `dropdown--${placement}`,
    isOpen ? 'dropdown--open' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="dropdown-wrapper" {...props}>
      <div
        ref={triggerRef}
        className="dropdown__trigger"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {children}
      </div>

      {isOpen && !disabled && (
        <div
          ref={dropdownRef}
          className={dropdownClasses}
          style={style}
          role="menu"
          aria-label={ariaLabel}
        >
          {items.map((item) => {
            if (item.divider) {
              return <div key={item.id} className="dropdown__divider" role="separator" />;
            }

            const itemClasses = [
              'dropdown__item',
              item.disabled ? 'dropdown__item--disabled' : ''
            ].filter(Boolean).join(' ');

            if (item.href && !item.disabled) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.target}
                  className={itemClasses}
                  role="menuitem"
                  onClick={() => handleItemClick(item)}
                >
                  {item.icon && (
                    <span className="dropdown__item-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="dropdown__item-label">{item.label}</span>
                </a>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                className={itemClasses}
                role="menuitem"
                disabled={item.disabled}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && (
                  <span className="dropdown__item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                <span className="dropdown__item-label">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
