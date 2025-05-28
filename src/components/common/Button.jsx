import { forwardRef } from 'react';
import clsx from 'clsx';

const Button = forwardRef(({ 
  children, 
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props 
}, ref) => {
  const baseStyles = `
    rounded-full
    font-medium
    text-sm
    cursor-pointer
    transition
    duration-200
    outline-none
    flex
    items-center
    justify-center
    gap-2
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;
  
  const variants = {
    primary: `
      bg-brand-pink
      text-text-primary
      border-2 border-transparent
      hover:opacity-90
      focus:opacity-90
      active:opacity-90
    `,
    secondary: `
      bg-white
      text-brand-jade
      border-2 border-brand-jade
      hover:bg-brand-jade hover:text-text-light
      focus:bg-brand-jade focus:text-text-light
      active:bg-brand-jade active:text-text-light
    `,
    tertiary: `
      bg-white
      text-text-primary
      border-2 border-transparent
      transition-all
      py-2 px-4
      font-normal
    `,
    quaternary: `
      bg-white
      text-text-primary
      border-2 
      py-2 px-4
      font-normal
    `,
    sidebar: `
      w-full min-w-[160px]
      py-4 px-4
      rounded-full
      bg-transparent
      text-text-secondary
      text-left font-medium
      border-none
      transition-all duration-200
      flex items-center gap-4
      hover:not(.active):bg-white
      hover:not(.active):shadow-[1px_2px_0_rgba(0,0,0,0.1)]
      hover:not(.active):-translate-y-[1px]
      [&.active]:bg-brand-pink
      [&.active]:text-text-primary
      focus:bg-brand-pink
      focus:text-text-primary
      active:bg-brand-pink
      active:text-text-primary
    `
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      ref={ref}
      className={clsx(
        baseStyles, 
        variants[variant], 
        // Only apply size classes for primary and secondary variants
        ['primary', 'secondary'].includes(variant) ? sizes[size] : '',
        className
      )}
      {...props}
    >
      {icon && <span className="text-[1.1em]">{icon}</span>}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 