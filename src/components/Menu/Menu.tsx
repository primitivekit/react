import React, { useState } from 'react';
import { MenuProps, MenuItem as MenuItemType } from './Menu.types';
import './Menu.css';

export const Menu: React.FC<MenuProps> = ({
  items,
  mode = 'vertical',
  theme = 'light',
  selectedKeys: controlledSelectedKeys,
  defaultSelectedKeys = [],
  openKeys: controlledOpenKeys,
  defaultOpenKeys = [],
  multiple = false,
  className = '',
  style,
  cssVariables,
  onSelect,
  onOpenChange,
}) => {
  const [uncontrolledSelectedKeys, setUncontrolledSelectedKeys] = useState<string[]>(defaultSelectedKeys);
  const [uncontrolledOpenKeys, setUncontrolledOpenKeys] = useState<string[]>(defaultOpenKeys);

  const isSelectedControlled = controlledSelectedKeys !== undefined;
  const isOpenControlled = controlledOpenKeys !== undefined;

  const selectedKeys = isSelectedControlled ? controlledSelectedKeys : uncontrolledSelectedKeys;
  const openKeys = isOpenControlled ? controlledOpenKeys : uncontrolledOpenKeys;

  const handleSelect = (key: string) => {
    let newSelectedKeys: string[];

    if (multiple) {
      newSelectedKeys = selectedKeys.includes(key)
        ? selectedKeys.filter(k => k !== key)
        : [...selectedKeys, key];
    } else {
      newSelectedKeys = [key];
    }

    if (!isSelectedControlled) {
      setUncontrolledSelectedKeys(newSelectedKeys);
    }

    onSelect?.(key);
  };

  const handleOpenChange = (key: string) => {
    const newOpenKeys = openKeys.includes(key)
      ? openKeys.filter(k => k !== key)
      : [...openKeys, key];

    if (!isOpenControlled) {
      setUncontrolledOpenKeys(newOpenKeys);
    }

    onOpenChange?.(newOpenKeys);
  };

  const classes = [
    'menu',
    `menu--${mode}`,
    `menu--${theme}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <ul
      className={classes}
      style={{ ...cssVariables, ...style } as React.CSSProperties}
      role="menu"
    >
      {items.map((item) => (
        <MenuItem
          key={item.key}
          item={item}
          mode={mode}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onSelect={handleSelect}
          onOpenChange={handleOpenChange}
          level={0}
        />
      ))}
    </ul>
  );
};

interface MenuItemProps {
  item: MenuItemType;
  mode: MenuProps['mode'];
  selectedKeys: string[];
  openKeys: string[];
  onSelect: (key: string) => void;
  onOpenChange: (key: string) => void;
  level: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  mode,
  selectedKeys,
  openKeys,
  onSelect,
  onOpenChange,
  level,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isSelected = selectedKeys.includes(item.key);
  const isOpen = openKeys.includes(item.key);
  const isDisabled = item.disabled;

  const handleClick = () => {
    if (isDisabled) return;

    if (hasChildren) {
      onOpenChange(item.key);
    } else {
      onSelect(item.key);
      item.onClick?.();
    }
  };

  const itemClasses = [
    'menu__item',
    hasChildren && 'menu__item--submenu',
    isSelected && 'menu__item--selected',
    isDisabled && 'menu__item--disabled',
  ].filter(Boolean).join(' ');

  const itemStyle = mode === 'inline' && level > 0
    ? { paddingLeft: `calc(var(--menu-item-padding, 1rem) + ${level} * var(--menu-inline-indent, 1.5rem))` }
    : undefined;

  return (
    <li className={itemClasses} role="none">
      <div
        className="menu__item-content"
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        role="menuitem"
        tabIndex={isDisabled ? -1 : 0}
        aria-disabled={isDisabled}
        aria-expanded={hasChildren ? isOpen : undefined}
        style={itemStyle}
      >
        {item.icon && <span className="menu__icon">{item.icon}</span>}
        <span className="menu__label">{item.label}</span>
        {hasChildren && (
          <span className={`menu__arrow ${isOpen ? 'menu__arrow--open' : ''}`}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </div>
      {hasChildren && isOpen && (
        <ul className="menu__submenu" role="menu">
          {item.children!.map((child) => (
            <MenuItem
              key={child.key}
              item={child}
              mode={mode}
              selectedKeys={selectedKeys}
              openKeys={openKeys}
              onSelect={onSelect}
              onOpenChange={onOpenChange}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
