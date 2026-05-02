import React, { useEffect, useRef } from 'react';
import { DrawerProps } from './Drawer.types';
import './Drawer.css';

export const Drawer: React.FC<DrawerProps> = ({
  open,
  title,
  placement = 'right',
  size = 'medium',
  width,
  height,
  children,
  footer,
  closable = true,
  mask = true,
  maskClosable = true,
  keyboard = true,
  className = '',
  style,
  cssVariables,
  onClose,
  afterOpenChange,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousOpenRef = useRef(open);

  useEffect(() => {
    if (previousOpenRef.current !== open) {
      afterOpenChange?.(open);
      previousOpenRef.current = open;
    }
  }, [open, afterOpenChange]);

  useEffect(() => {
    if (!open || !keyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, keyboard, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open && !mask) return null;

  const handleMaskClick = () => {
    if (maskClosable) {
      onClose?.();
    }
  };

  const handleDrawerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const classes = [
    'drawer',
    `drawer--${placement}`,
    `drawer--${size}`,
    open && 'drawer--open',
    className,
  ].filter(Boolean).join(' ');

  const drawerStyle: React.CSSProperties = {
    ...cssVariables,
    ...style,
  };

  if (width && (placement === 'left' || placement === 'right')) {
    drawerStyle.width = typeof width === 'number' ? `${width}px` : width;
  }

  if (height && (placement === 'top' || placement === 'bottom')) {
    drawerStyle.height = typeof height === 'number' ? `${height}px` : height;
  }

  return (
    <>
      {mask && (
        <div
          className={`drawer__mask ${open ? 'drawer__mask--open' : ''}`}
          onClick={handleMaskClick}
          aria-hidden="true"
        />
      )}
      <div
        ref={drawerRef}
        className={classes}
        style={drawerStyle}
        onClick={handleDrawerClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
      >
        {(title || closable) && (
          <div className="drawer__header">
            {title && (
              <div id="drawer-title" className="drawer__title">
                {title}
              </div>
            )}
            {closable && (
              <button
                className="drawer__close"
                onClick={onClose}
                aria-label="Close drawer"
                type="button"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className="drawer__body">{children}</div>
        {footer && <div className="drawer__footer">{footer}</div>}
      </div>
    </>
  );
};
