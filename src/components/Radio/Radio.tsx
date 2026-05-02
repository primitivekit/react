import React, { useId } from 'react';
import type { RadioProps } from './Radio.types';
import './Radio.css';

const Radio: React.FC<RadioProps> = ({
  size = 'medium',
  label,
  helperText,
  error,
  className = '',
  style = {},
  id: idProp,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  required = false,
  ariaLabel,
  ...props
}) => {
  const generatedId = useId();
  const id = idProp || generatedId;
  const helperId = `${id}-helper`;
  
  const displayHelperText = error || helperText;
  
  const wrapperClasses = [
    'radio-wrapper',
    className
  ].filter(Boolean).join(' ');
  
  const radioClasses = [
    'radio',
    `radio--${size}`,
    disabled ? 'radio--disabled' : '',
    error ? 'radio--error' : ''
  ].filter(Boolean).join(' ');
  
  const labelClasses = [
    'radio__label',
    disabled ? 'radio__label--disabled' : ''
  ].filter(Boolean).join(' ');
  
  const helperClasses = [
    'radio__helper',
    error ? 'radio__helper--error' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses} style={style}>
      <label className="radio__container">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className={radioClasses}
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
        <span className="radio__circle">
          <span className="radio__dot"></span>
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

export default Radio;
