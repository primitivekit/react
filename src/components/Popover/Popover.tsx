import React, { useState, useRef, useEffect } from 'react';
import type { PopoverProps } from './Popover.types';
import './Popover.css';

const Popover: React.FC<PopoverProps> = ({
  content,
  header,
  footer,
  children,
  placement = 'bottom',
  trigger = 'click',
  showArrow = true,
  showCloseButton = false,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  delay = 200,
  isOpen: controlledIsOpen,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  className = '',
  style = {},
  ariaLabel,
  ...props
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
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

  const handleOpen = () => {
    if (disabled) return;
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleTriggerClick = () => {
    if (trigger === 'click') {
      handleToggle();
    }
  };

  const handleTriggerMouseEnter = () => {
    if (trigger === 'hover') {
      timeoutRef.current = setTimeout(() => {
        handleOpen();
      }, delay);
    }
  };

  const handleTriggerMouseLeave = () => {
    if (trigger === 'hover') {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      handleClose();
    }
  };

  const handleTriggerFocus = () => {
    if (trigger === 'focus') {
      handleOpen();
    }
  };

  const handleTriggerBlur = () => {
    if (trigger === 'focus') {
      handleClose();
    }
  };

  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        triggerRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
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

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const popoverClasses = [
    'popover',
    `popover--${placement}`,
    isOpen ? 'popover--open' : '',
    showArrow ? 'popover--with-arrow' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="popover-wrapper" {...props}>
      <div
        ref={triggerRef}
        className="popover__trigger"
        onClick={handleTriggerClick}
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={handleTriggerMouseLeave}
        onFocus={handleTriggerFocus}
        onBlur={handleTriggerBlur}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        {children}
      </div>

      {isOpen && !disabled && (
        <div
          ref={popoverRef}
          className={popoverClasses}
          style={style}
          role="dialog"
          aria-label={ariaLabel}
        >
          {showArrow && <div className="popover__arrow" />}
          
          {(header || showCloseButton) && (
            <div className="popover__header">
              {header && <div className="popover__header-content">{header}</div>}
              {showCloseButton && (
                <button
                  className="popover__close"
                  onClick={handleClose}
                  aria-label="Close popover"
                  type="button"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          )}

          <div className="popover__body">{content}</div>

          {footer && (
            <div className="popover__footer">{footer}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Popover;
