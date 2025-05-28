import IconButton from './IconButton';
import Label from './Label';

const IconSelector = ({ 
  icons, 
  label, 
  className = '',
  labelClassName = '' 
}) => {
  return (
    <div className={className}>
      <Label className={labelClassName}>{label}</Label>
      <div className="flex gap-2 mt-2 sm:mt-0">
        {Object.entries(icons).map(([type, Icon]) => (
          <IconButton 
            key={type} 
            icon={Icon} 
            aria-label={type}
          />
        ))}
      </div>
    </div>
  );
};

export default IconSelector; 