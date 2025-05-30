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
      bg-brand-green
      text-text-light
      text-sm
      opacity-80
      hover:opacity-100
      hover:scale-105
      focus:opacity-90
      active:opacity-90
      active:scale-105
      focus:scale-105
      focus:font-bold
    `,
    secondary: `
      bg-brand-yellow
      text-text-dark
      text-sm
      opacity-80
      border-none
      hover:opacity-100
      hover:scale-105
      focus:opacity-100
      active:opacity-100
      active:text-medium
      active:scale-105
      focus:scale-105
      focus:font-bold
    `,
    tertiary: `
      bg-white
      text-text-primary
      text-sm
      border-2 border-transparent
      transition-all
      py-2 px-4
      font-normal
    `,
    quaternary: `
      bg-white
      text-text-primary
      text-sm
      border-2 
      py-2 px-4
      font-normal
    `,
    sidebar: `
      w-full min-w-[160px]
      py-4 px-4
      rounded-full
      bg-transparent
      text-text-primary
      text-left 
      text-medium
      border-none
      transition-all duration-200
      flex items-center gap-4
      hover:bg-brand-mint
      hover:text-text-primary
      hover:scale-105
      [&.active]:bg-brand-green
      [&.active]:text-white
      focus:bg-brand-green
      focus:text-white
      active:bg-brand-green
      active:text-white
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