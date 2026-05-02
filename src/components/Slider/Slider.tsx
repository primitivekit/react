import React, { useState, useRef, useEffect } from 'react';
import { SliderProps } from './Slider.types';
import './Slider.css';

export const Slider: React.FC<SliderProps> = ({
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  range = false,
  marks,
  tooltip = true,
  vertical = false,
  disabled = false,
  size = 'medium',
  className = '',
  style,
  cssVariables,
  onChange,
  onAfterChange,
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<number | [number, number]>(defaultValue);
  const [dragging, setDragging] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const normalizedValue = Array.isArray(value) ? value : [value];

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  const getValueFromPosition = (clientPos: number) => {
    if (!railRef.current) return min;

    const rect = railRef.current.getBoundingClientRect();
    const dimension = vertical ? rect.height : rect.width;
    const offset = vertical ? rect.bottom - clientPos : clientPos - rect.left;
    const percentage = vertical ? (dimension - offset) / dimension : offset / dimension;
    
    let newValue = min + percentage * (max - min);
    newValue = Math.round(newValue / step) * step;
    newValue = Math.max(min, Math.min(max, newValue));
    
    return newValue;
  };

  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    if (disabled) return;
    e.preventDefault();
    setDragging(index);
    setShowTooltip(index);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging === null || disabled) return;

    const clientPos = vertical ? e.clientY : e.clientX;
    const newValue = getValueFromPosition(clientPos);

    if (range && Array.isArray(value)) {
      const newRange: [number, number] = [...value] as [number, number];
      newRange[dragging] = newValue;
      
      // Ensure min <= max
      if (newRange[0] > newRange[1]) {
        newRange[dragging === 0 ? 1 : 0] = newValue;
      }

      if (!isControlled) {
        setUncontrolledValue(newRange);
      }
      onChange?.(newRange);
    } else {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onChange?.(newValue);
    }
  };

  const handleMouseUp = () => {
    if (dragging !== null) {
      setDragging(null);
      setShowTooltip(null);
      onAfterChange?.(value);
    }
  };

  useEffect(() => {
    if (dragging !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragging, value]);

  const classes = [
    'slider',
    `slider--${size}`,
    vertical && 'slider--vertical',
    disabled && 'slider--disabled',
    className,
  ].filter(Boolean).join(' ');

  const trackStyle = range && Array.isArray(value)
    ? vertical
      ? { bottom: `${getPercentage(value[0])}%`, height: `${getPercentage(value[1]) - getPercentage(value[0])}%` }
      : { left: `${getPercentage(value[0])}%`, width: `${getPercentage(value[1]) - getPercentage(value[0])}%` }
    : vertical
      ? { bottom: 0, height: `${getPercentage(normalizedValue[0])}%` }
      : { left: 0, width: `${getPercentage(normalizedValue[0])}%` };

  return (
    <div
      className={classes}
      style={{ ...cssVariables, ...style } as React.CSSProperties}
    >
      <div ref={railRef} className="slider__rail">
        <div className="slider__track" style={trackStyle} />
        
        {marks && Object.entries(marks).map(([markValue, markLabel]) => {
          const val = Number(markValue);
          const isActive = range && Array.isArray(value)
            ? val >= value[0] && val <= value[1]
            : val <= normalizedValue[0];
          
          const markStyle = vertical
            ? { bottom: `${getPercentage(val)}%` }
            : { left: `${getPercentage(val)}%` };

          return (
            <div
              key={val}
              className={`slider__mark ${isActive ? 'slider__mark--active' : ''}`}
              style={markStyle}
            >
              <div className="slider__mark-dot" />
              {typeof markLabel === 'string' ? (
                <div className="slider__mark-label">{markLabel}</div>
              ) : (
                <div className="slider__mark-label" style={markLabel.style}>
                  {markLabel.label}
                </div>
              )}
            </div>
          );
        })}

        {normalizedValue.map((val, index) => {
          const handleStyle = vertical
            ? { bottom: `${getPercentage(val)}%` }
            : { left: `${getPercentage(val)}%` };

          return (
            <div
              key={index}
              className="slider__handle"
              style={handleStyle}
              onMouseDown={handleMouseDown(index)}
              onMouseEnter={() => setShowTooltip(index)}
              onMouseLeave={() => dragging === null && setShowTooltip(null)}
              role="slider"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={val}
              aria-disabled={disabled}
              tabIndex={disabled ? -1 : 0}
            >
              {tooltip && showTooltip === index && (
                <div className="slider__tooltip">{val}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
