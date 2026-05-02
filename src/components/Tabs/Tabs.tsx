import React, { useState } from 'react';
import type { TabsProps } from './Tabs.types';
import './Tabs.css';

const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab: controlledActiveTab,
  defaultActiveTab,
  onChange,
  variant = 'line',
  size = 'medium',
  orientation = 'horizontal',
  fullWidth = false,
  className = '',
  style = {},
  ariaLabel = 'Tabs',
  ...props
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultActiveTab || items[0]?.id || ''
  );

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return;
    
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    
    if (onChange) {
      onChange(tabId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number, disabled?: boolean) => {
    if (disabled) return;

    let nextIndex = index;
    
    if (orientation === 'horizontal') {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextIndex = (index + 1) % items.length;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        nextIndex = (index - 1 + items.length) % items.length;
      }
    } else {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (index + 1) % items.length;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (index - 1 + items.length) % items.length;
      }
    }

    if (nextIndex !== index) {
      const nextTab = items[nextIndex];
      if (!nextTab.disabled) {
        handleTabClick(nextTab.id, nextTab.disabled);
        // Focus the next tab button
        const nextButton = document.querySelector(
          `[data-tab-id="${nextTab.id}"]`
        ) as HTMLButtonElement;
        nextButton?.focus();
      }
    }

    if (e.key === 'Home') {
      e.preventDefault();
      const firstTab = items.find(t => !t.disabled);
      if (firstTab) {
        handleTabClick(firstTab.id, firstTab.disabled);
        const firstButton = document.querySelector(
          `[data-tab-id="${firstTab.id}"]`
        ) as HTMLButtonElement;
        firstButton?.focus();
      }
    }

    if (e.key === 'End') {
      e.preventDefault();
      const lastTab = [...items].reverse().find(t => !t.disabled);
      if (lastTab) {
        handleTabClick(lastTab.id, lastTab.disabled);
        const lastButton = document.querySelector(
          `[data-tab-id="${lastTab.id}"]`
        ) as HTMLButtonElement;
        lastButton?.focus();
      }
    }
  };

  const tabsClasses = [
    'tabs',
    `tabs--${variant}`,
    `tabs--${size}`,
    `tabs--${orientation}`,
    fullWidth ? 'tabs--full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={tabsClasses} style={style} {...props}>
      <div
        className="tabs__list"
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation={orientation}
      >
        {items.map((item, index) => {
          const isActive = item.id === activeTab;
          const tabClasses = [
            'tabs__tab',
            isActive ? 'tabs__tab--active' : '',
            item.disabled ? 'tabs__tab--disabled' : ''
          ].filter(Boolean).join(' ');

          return (
            <button
              key={item.id}
              data-tab-id={item.id}
              className={tabClasses}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              aria-disabled={item.disabled}
              tabIndex={isActive ? 0 : -1}
              disabled={item.disabled}
              onClick={() => handleTabClick(item.id, item.disabled)}
              onKeyDown={(e) => handleKeyDown(e, index, item.disabled)}
            >
              {item.icon && (
                <span className="tabs__tab-icon" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <span className="tabs__tab-label">{item.label}</span>
            </button>
          );
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          id={`panel-${item.id}`}
          className="tabs__panel"
          role="tabpanel"
          aria-labelledby={item.id}
          hidden={item.id !== activeTab}
        >
          {item.id === activeTab && item.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
