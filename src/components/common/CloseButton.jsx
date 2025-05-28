const CloseButton = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        absolute 
        top-3 
        right-3
        w-6 h-6
        bg-[var(--tag-vaccination)]
        rounded-full 
        flex items-center justify-center
        transition-colors
        hover:bg-brand-jade
        hover:text-text-light
        ${className}
      `}
    >
      <svg 
        width="10" 
        height="10" 
        viewBox="0 0 14 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1 1L13 13M1 13L13 1" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default CloseButton; 