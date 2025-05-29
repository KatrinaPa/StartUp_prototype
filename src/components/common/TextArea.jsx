const TextArea = ({ 
  className = '',
  ...props 
}) => {
  return (
    <textarea
      className={`
        w-full 
        rounded-lg 
        border 
        border-border-light 
        p-2
        text-text-primary
        placeholder:text-text-grey
        focus:outline-none
        focus:border-brand-yellow
        ${className}
      `}
      {...props}
    />
  );
};

export default TextArea; 