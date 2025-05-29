import { forwardRef } from 'react';

const Select = forwardRef(({ 
  value, 
  onChange, 
  placeholder = 'Izvēlēties', 
  options = [],
  disabled = false,
  className = '',
  ...props 
}, ref) => {
  return (
    <select
      ref={ref}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full rounded-lg border border-border-light px-4 py-2 text-text-primary 
        focus:outline-none focus:border-brand-yellow 
        disabled:bg-bg-primary disabled:cursor-not-allowed
        ${className}`}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';

export default Select; 