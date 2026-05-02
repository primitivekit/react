import React, { useId } from 'react';
import type { SwitchProps } from './Switch.types';
import './Switch.css';

const Switch: React.FC<SwitchProps> = ({
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
  ariaLabel,
  ...props
}) => {
  const generatedId = useId();
  const id = idProp || generatedId;
  const helperId = `${id}-helper`;
  
  const displayHelperText = error || helperText;
  
  const wrapperClasses = [
    'switch-wrapper',
    className
  ].filter(Boolean).join(' ');
  
  const switchClasses = [
    'switch',
    `switch--${size}`,
    disabled ? 'switch--disabled' : '',
    error ? 'switch--error' : ''
  ].filter(Boolean).join(' ');
  
  const labelClasses = [
    'switch__label',
    disabled ? 'switch__label--disabled' : ''
  ].filter(Boolean).join(' ');
  
  const helperClasses = [
    'switch__helper',
    error ? 'switch__helper--error' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses} style={style}>
      <label className="switch__container">
        <input
          type="checkbox"
          role="switch"
          id={id}
          name={name}
          className={switchClasses}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-label={ariaLabel || label}
          aria-describedby={displayHelperText ? helperId : undefined}
          aria-invalid={!!error}
          aria-required={required}
          aria-checked={checked}
          {...props}
        />
        <span className="switch__track">
          <span className="switch__thumb"></span>
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

export default Switch;
