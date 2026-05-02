import React, { useId, useEffect, useRef } from 'react';
import type { CheckboxProps } from './Checkbox.types';
import './Checkbox.css';

const Checkbox: React.FC<CheckboxProps> = ({
  size = 'medium',
  label,
  helperText,
  error,
  className = '',
  style = {},
  id: idProp,
  name,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  required = false,
  indeterminate = false,
  ariaLabel,
  ...props
}) => {
  const generatedId = useId();
  const id = idProp || generatedId;
  const helperId = `${id}-helper`;
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  
  const displayHelperText = error || helperText;
  
  const wrapperClasses = [
    'checkbox-wrapper',
    className
  ].filter(Boolean).join(' ');
  
  const checkboxClasses = [
    'checkbox',
    `checkbox--${size}`,
    disabled ? 'checkbox--disabled' : '',
    error ? 'checkbox--error' : ''
  ].filter(Boolean).join(' ');
  
  const labelClasses = [
    'checkbox__label',
    disabled ? 'checkbox__label--disabled' : ''
  ].filter(Boolean).join(' ');
  
  const helperClasses = [
    'checkbox__helper',
    error ? 'checkbox__helper--error' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses} style={style}>
      <label className="checkbox__container">
        <input
          ref={inputRef}
          type="checkbox"
          id={id}
          name={name}
          className={checkboxClasses}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-label={ariaLabel || label}
          aria-describedby={displayHelperText ? helperId : undefined}
          aria-invalid={!!error}
          aria-required={required}
          {...props}
        />
        <span className="checkbox__checkmark">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13.3333 4L6 11.3333L2.66667 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {label && <span className={labelClasses}>{label}</span>}
      </label>
      
      {displayHelperText && (
        <div id={helperId} className={helperClasses}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
