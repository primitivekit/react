import React from 'react';
import { StepsProps, StepStatus } from './Steps.types';
import './Steps.css';

export const Steps: React.FC<StepsProps> = ({
  items,
  current = 0,
  direction = 'horizontal',
  size = 'medium',
  className = '',
  style,
  cssVariables,
  onChange,
}) => {
  const getStepStatus = (index: number): StepStatus => {
    const item = items[index];
    if (item.status) return item.status;
    if (index < current) return 'finish';
    if (index === current) return 'process';
    return 'wait';
  };

  const classes = [
    'steps',
    `steps--${direction}`,
    `steps--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={{ ...cssVariables, ...style } as React.CSSProperties}
    >
      {items.map((item, index) => {
        const status = getStepStatus(index);
        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            className={`steps__item steps__item--${status} ${item.disabled ? 'steps__item--disabled' : ''}`}
            onClick={() => !item.disabled && onChange?.(index)}
            role={onChange ? 'button' : undefined}
            tabIndex={onChange && !item.disabled ? 0 : undefined}
            onKeyDown={onChange && !item.disabled ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onChange(index);
              }
            } : undefined}
          >
            <div className="steps__item-container">
              <div className="steps__item-icon">
                {item.icon || (
                  status === 'finish' ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : status === 'error' ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )
                )}
              </div>
              {!isLast && <div className="steps__item-tail" />}
            </div>
            <div className="steps__item-content">
              <div className="steps__item-title">{item.title}</div>
              {item.description && (
                <div className="steps__item-description">{item.description}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
