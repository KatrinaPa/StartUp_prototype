const Label = ({ children, className = '', ...props }) => {
    return (
      <label
        className={`
          block
          text-base
          font-light
          text-text-secondary
          mb-1
          ${className}
        `}
        {...props}
      >
        {children}
      </label>
    );
  };
  
  export default Label;
  