import React, { useId } from 'react';
import type { InputProps } from './Input.types';
import './Input.css';

const Input: React.FC<InputProps> = ({
  size = 'medium',
  variant = 'default',
  state: stateProp = 'default',
  label,
  helperText,
  error,
  success,
  warning,
  fullWidth = false,
  leftElement,
  rightElement,
  className = '',
  style = {},
  id: idProp,
  name,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  required = false,
  ariaLabel,
  ariaDescribedBy,
  ariaInvalid,
  ...props
}) => {
  const generatedId = useId();
  const id = idProp || generatedId;
  const helperId = `${id}-helper`;
  
  // Determine state based on props
  let state = stateProp;
  if (error) state = 'error';
  else if (success) state = 'success';
  else if (warning) state = 'warning';
  
  // Determine helper text
  const displayHelperText = error || success || warning || helperText;
  
  const wrapperClasses = [
    'input-wrapper',
    fullWidth ? 'input-wrapper--full-width' : '',
    className
  ].filter(Boolean).join(' ');
  
  const inputClasses = [
    'input',
    `input--${size}`,
    `input--${variant}`,
    `input--${state}`,
    disabled ? 'input--disabled' : '',
    readOnly ? 'input--readonly' : '',
    leftElement ? 'input--has-left' : '',
    rightElement ? 'input--has-right' : ''
  ].filter(Boolean).join(' ');
  
  const labelClasses = [
    'input__label',
    disabled ? 'input__label--disabled' : '',
    state !== 'default' ? `input__label--${state}` : '',
    required ? 'input__label--required' : ''
  ].filter(Boolean).join(' ');
  
  const helperClasses = [
    'input__helper',
    state !== 'default' ? `input__helper--${state}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses} style={style}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
          {required && <span className="input__required-indicator" aria-label="required"> *</span>}
        </label>
      )}
      
      <div className="input__container">
        {leftElement && (
          <div className="input__left-element" aria-hidden="true">
            {leftElement}
          </div>
        )}
        
        <input
          id={id}
          name={name}
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-label={ariaLabel || (label ? undefined : placeholder)}
          aria-describedby={displayHelperText ? helperId : ariaDescribedBy}
          aria-invalid={ariaInvalid !== undefined ? ariaInvalid : state === 'error'}
          aria-required={required}
          {...props}
        />
        
        {rightElement && (
          <div className="input__right-element" aria-hidden="true">
            {rightElement}
          </div>
        )}
      </div>
      
      {displayHelperText && (
        <div id={helperId} className={helperClasses}>
          {error || success || warning || helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
