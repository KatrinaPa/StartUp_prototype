import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props 
}, ref) => {
  const baseStyles = `
    rounded-[50px]
    font-medium
    text-sm
    cursor-pointer
    transition-all
    duration-200
    outline-none
    focus:outline-none
    focus:shadow-none
    -webkit-tap-highlight-color-transparent
    flex
    items-center
    justify-center
    gap-2
  `;
  
  const variants = {
    primary: `
      bg-brand-pink
      text-text-dark
      border-2
      border-transparent
      hover:opacity-90
      focus:opacity-90
      active:opacity-90
    `,
    secondary: `
      bg-bg-white
      text-text-primary
      border-2
      border-brand-jade
      hover:bg-brand-jade
      hover:text-text-light
      focus:bg-brand-jade
      focus:text-text-light
      active:bg-brand-jade
      active:text-text-light
      focus:border-brand-jade
      focus:outline-none
      focus:shadow-none
    `
  };
  
  const sizes = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',  // 0.8rem 1.5rem equivalent
    lg: 'px-8 py-4'
  };

  return (
    <button
      ref={ref}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="text-[1.1em]">{icon}</span>}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 