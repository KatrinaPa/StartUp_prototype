import { forwardRef } from 'react';

const Input = forwardRef(({ 
  type = 'text',
  className = '',
  ...props 
}, ref) => {
  return (
    <input
      ref={ref}
      className={`
        w-full
        px-4 py-2
        border   
        text-text-primary
        border-gray-300
        rounded-xl
        focus:outline-none
        focus:ring-1
        focus:ring-brand-jade
        transition
        placeholder:text-text-grey
        ${className}
      `}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
