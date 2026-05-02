import React, { useId } from 'react';
import type { SelectProps } from './Select.types';
import './Select.css';

const Select: React.FC<SelectProps> = ({
  size = 'medium',
  variant = 'default',
  state: stateProp = 'default',
  label,
  helperText,
  error,
  success,
  warning,
  fullWidth = false,
  options,
  placeholder,
  className = '',
  style = {},
  id: idProp,
  name,
  value,
  defaultValue,
  onChange,
  disabled = false,
  required = false,
  ariaLabel,
  ...props
}) => {
  const generatedId = useId();
  const id = idProp || generatedId;
  const helperId = `${id}-helper`;
  
  let state = stateProp;
  if (error) state = 'error';
  else if (success) state = 'success';
  else if (warning) state = 'warning';
  
  const displayHelperText = error || success || warning || helperText;
  
  const wrapperClasses = [
    'select-wrapper',
    fullWidth ? 'select-wrapper--full-width' : '',
    className
  ].filter(Boolean).join(' ');
  
  const selectClasses = [
    'select',
    `select--${size}`,
    `select--${variant}`,
    `select--${state}`,
    disabled ? 'select--disabled' : ''
  ].filter(Boolean).join(' ');
  
  const labelClasses = [
    'select__label',
    disabled ? 'select__label--disabled' : '',
    state !== 'default' ? `select__label--${state}` : '',
    required ? 'select__label--required' : ''
  ].filter(Boolean).join(' ');
  
  const helperClasses = [
    'select__helper',
    state !== 'default' ? `select__helper--${state}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses} style={style}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
          {required && <span className="select__required-indicator" aria-label="required"> *</span>}
        </label>
      )}
      
      <div className="select__container">
        <select
          id={id}
          name={name}
          className={selectClasses}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-label={ariaLabel || label}
          aria-describedby={displayHelperText ? helperId : undefined}
          aria-invalid={state === 'error'}
          aria-required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="select__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {displayHelperText && (
        <div id={helperId} className={helperClasses}>
          {error || success || warning || helperText}
        </div>
      )}
    </div>
  );
};

export default Select;
