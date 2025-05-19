const IconButton = ({ 
  icon: Icon,
  isActive,
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`
        p-3 border rounded-lg transition-all
        ${isActive ? 'bg-brand-pink border-brand-pink' : 'hover:bg-gray-50'}
        ${className}
      `}
      {...props}
    >
      <Icon className="text-2xl" />
    </button>
  );
};

export default IconButton; 