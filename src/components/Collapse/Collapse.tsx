import React, { useState, useRef, useEffect } from 'react';
import { CollapseProps } from './Collapse.types';
import './Collapse.css';

export const Collapse: React.FC<CollapseProps> = ({
  items,
  activeKey: controlledActiveKey,
  defaultActiveKey = [],
  accordion = false,
  bordered = true,
  expandIconPosition = 'start',
  className = '',
  style,
  cssVariables,
  onChange,
}) => {
  const [uncontrolledActiveKey, setUncontrolledActiveKey] = useState<string[]>(() => {
    if (Array.isArray(defaultActiveKey)) {
      return defaultActiveKey;
    }
    return defaultActiveKey ? [defaultActiveKey] : [];
  });

  const isControlled = controlledActiveKey !== undefined;
  const activeKeys = isControlled
    ? Array.isArray(controlledActiveKey)
      ? controlledActiveKey
      : [controlledActiveKey]
    : uncontrolledActiveKey;

  const handleToggle = (key: string) => {
    const item = items.find(i => i.key === key);
    if (item?.disabled) return;

    let newActiveKeys: string[];

    if (accordion) {
      newActiveKeys = activeKeys.includes(key) ? [] : [key];
    } else {
      newActiveKeys = activeKeys.includes(key)
        ? activeKeys.filter(k => k !== key)
        : [...activeKeys, key];
    }

    if (!isControlled) {
      setUncontrolledActiveKey(newActiveKeys);
    }

    onChange?.(accordion ? (newActiveKeys[0] || '') : newActiveKeys);
  };

  const classes = [
    'collapse',
    bordered && 'collapse--bordered',
    className,
  ].filter(Boolean).join(' ');

  const expandIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="collapse__icon"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div
      className={classes}
      style={{ ...cssVariables, ...style } as React.CSSProperties}
    >
      {items.map((item) => {
        const isActive = activeKeys.includes(item.key);
        const isDisabled = item.disabled;

        return (
          <CollapsePanel
            key={item.key}
            item={item}
            isActive={isActive}
            isDisabled={isDisabled}
            expandIcon={expandIcon}
            expandIconPosition={expandIconPosition}
            onToggle={() => handleToggle(item.key)}
          />
        );
      })}
    </div>
  );
};

interface CollapsePanelProps {
  item: CollapseProps['items'][0];
  isActive: boolean;
  isDisabled?: boolean;
  expandIcon: React.ReactNode;
  expandIconPosition: 'start' | 'end';
  onToggle: () => void;
}

const CollapsePanel: React.FC<CollapsePanelProps> = ({
  item,
  isActive,
  isDisabled,
  expandIcon,
  expandIconPosition,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(isActive ? undefined : 0);

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        setHeight(contentRef.current.scrollHeight);
        // After animation, set to auto for dynamic content
        const timer = setTimeout(() => setHeight(undefined), 300);
        return () => clearTimeout(timer);
      } else {
        // Force reflow before setting height to 0
        setHeight(contentRef.current.scrollHeight);
        requestAnimationFrame(() => setHeight(0));
      }
    }
  }, [isActive]);

  const itemClasses = [
    'collapse__item',
    isActive && 'collapse__item--active',
    isDisabled && 'collapse__item--disabled',
  ].filter(Boolean).join(' ');

  const headerClasses = [
    'collapse__header',
    `collapse__header--icon-${expandIconPosition}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={itemClasses}>
      <div
        className={headerClasses}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        aria-expanded={isActive}
        aria-disabled={isDisabled}
      >
        {expandIconPosition === 'start' && (
          <span className="collapse__icon-wrapper">{expandIcon}</span>
        )}
        <span className="collapse__label">{item.label}</span>
        {item.extra && (
          <span className="collapse__extra">{item.extra}</span>
        )}
        {expandIconPosition === 'end' && (
          <span className="collapse__icon-wrapper">{expandIcon}</span>
        )}
      </div>
      <div
        ref={contentRef}
        className="collapse__content-wrapper"
        style={{ height: height !== undefined ? `${height}px` : 'auto' }}
      >
        <div className="collapse__content">
          {item.children}
        </div>
      </div>
    </div>
  );
};
