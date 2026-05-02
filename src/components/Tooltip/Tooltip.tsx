import React, { useState, useRef, useEffect } from 'react';
import type { TooltipProps } from './Tooltip.types';
import './Tooltip.css';

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  variant = 'dark',
  showArrow = true,
  delay = 200,
  disabled = false,
  className = '',
  style = {},
  ariaLabel,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const handleFocus = () => {
    if (disabled) return;
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const tooltipClasses = [
    'tooltip',
    `tooltip--${placement}`,
    `tooltip--${variant}`,
    isVisible ? 'tooltip--visible' : '',
    showArrow ? 'tooltip--with-arrow' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    >
      {children}
      {isVisible && !disabled && (
        <div
          ref={tooltipRef}
          className={tooltipClasses}
          style={style}
          role="tooltip"
          aria-label={ariaLabel}
        >
          <div className="tooltip__content">{content}</div>
          {showArrow && <div className="tooltip__arrow" />}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
