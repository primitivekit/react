import React, { useId } from 'react';
import type { TextareaProps } from './Textarea.types';
import './Textarea.css';

const Textarea: React.FC<TextareaProps> = ({
  size = 'medium',
  variant = 'default',
  state: stateProp = 'default',
  resize = 'vertical',
  label,
  helperText,
  error,
  success,
  warning,
  fullWidth = false,
  className = '',
  style = {},
  id: idProp,
  name,
  placeholder,
  value,
  defaultValue,
  rows = 4,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  required = false,
  maxLength,
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
    'textarea-wrapper',
    fullWidth ? 'textarea-wrapper--full-width' : '',
    className
  ].filter(Boolean).join(' ');
  
  const textareaClasses = [
    'textarea',
    `textarea--${size}`,
    `textarea--${variant}`,
    `textarea--${state}`,
    `textarea--resize-${resize}`,
    disabled ? 'textarea--disabled' : '',
    readOnly ? 'textarea--readonly' : ''
  ].filter(Boolean).join(' ');
  
  const labelClasses = [
    'textarea__label',
    disabled ? 'textarea__label--disabled' : '',
    state !== 'default' ? `textarea__label--${state}` : '',
    required ? 'textarea__label--required' : ''
  ].filter(Boolean).join(' ');
  
  const helperClasses = [
    'textarea__helper',
    state !== 'default' ? `textarea__helper--${state}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses} style={style}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
          {required && <span className="textarea__required-indicator" aria-label="required"> *</span>}
        </label>
      )}
      
      <textarea
        id={id}
        name={name}
        className={textareaClasses}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        rows={rows}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={maxLength}
        aria-label={ariaLabel || (label ? undefined : placeholder)}
        aria-describedby={displayHelperText ? helperId : ariaDescribedBy}
        aria-invalid={ariaInvalid !== undefined ? ariaInvalid : state === 'error'}
        aria-required={required}
        {...props}
      />
      
      {displayHelperText && (
        <div id={helperId} className={helperClasses}>
          {error || success || warning || helperText}
        </div>
      )}
    </div>
  );
};

export default Textarea;
