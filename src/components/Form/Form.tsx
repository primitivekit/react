import React, { createContext, useContext } from 'react';
import { FormProps, FormItemProps } from './Form.types';
import './Form.css';

interface FormContextValue {
  layout: FormProps['layout'];
  size: FormProps['size'];
}

const FormContext = createContext<FormContextValue>({
  layout: 'vertical',
  size: 'medium',
});

export const Form: React.FC<FormProps> = ({
  layout = 'vertical',
  size = 'medium',
  children,
  className = '',
  style,
  cssVariables,
  onSubmit,
  onValidate,
  ...props
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!onSubmit) return;

    const formData = new FormData(e.currentTarget);
    const values: Record<string, any> = {};
    
    formData.forEach((value, key) => {
      values[key] = value;
    });

    // Run validation if provided
    if (onValidate) {
      const errors = onValidate(values);
      if (Object.keys(errors).length > 0) {
        return;
      }
    }

    onSubmit(values);
  };

  const classes = [
    'form',
    `form--${layout}`,
    `form--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <FormContext.Provider value={{ layout, size }}>
      <form
        className={classes}
        style={{ ...cssVariables, ...style } as React.CSSProperties}
        onSubmit={handleSubmit}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

export const FormItem: React.FC<FormItemProps> = ({
  label,
  name,
  required = false,
  error,
  help,
  children,
  className = '',
  style,
}) => {
  const { layout } = useContext(FormContext);

  const classes = [
    'form__item',
    error && 'form__item--error',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      {label && (
        <label htmlFor={name} className="form__label">
          {label}
          {required && <span className="form__required">*</span>}
        </label>
      )}
      <div className="form__content">
        {children}
        {error && <div className="form__error">{error}</div>}
        {!error && help && <div className="form__help">{help}</div>}
      </div>
    </div>
  );
};

Form.Item = FormItem;
