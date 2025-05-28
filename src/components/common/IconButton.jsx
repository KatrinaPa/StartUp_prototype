const IconButton = ({ 
  icon: Icon,
  isActive = false,
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`
        w-11 h-11
        bg-brand-jade
        rounded-full
        flex items-center justify-center
        cursor-pointer
        transition-transform transition-opacity duration-200
        opacity-60
        hover:opacity-100
        hover:scale-105
        focus:outline-none
        focus:ring-2 focus:ring-brand-jade
        ${isActive ? 'opacity-100 scale-105' : ''}
        ${className}
      `}
      {...props}
    >
      <Icon className="w-7 h-auto text-white" />
    </button>
  );
};

export default IconButton;
