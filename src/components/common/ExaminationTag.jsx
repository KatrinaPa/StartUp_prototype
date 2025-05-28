import { examinationLabels } from '../../data/examinationLabels';

const tagStyles = {
  'blood-test': 'bg-[var(--tag-blood)] text-[var(--text-primary)]',
  'usg': 'bg-[var(--tag-usg)] text-[var(--text-primary)]',
  'rtg': 'bg-[var(--tag-rtg)] text-[var(--text-primary)]',
  'vaccination': 'bg-[var(--tag-vaccination)] text-[var(--text-primary)]',
  'general': 'bg-[var(--tag-general)] text-[var(--text-primary)]'
};

const tagBorderStyles = {
  'blood-test': 'border-[var(--tag-blood)]',
  'usg': 'border-[var(--tag-usg)]',
  'rtg': 'border-[var(--tag-rtg)]',
  'vaccination': 'border-[var(--tag-vaccination)]',
  'general': 'border-[var(--tag-general)]'
};

const ExaminationTag = ({ 
  type, 
  isSelected, 
  isSelectable = false,
  className = '',
  ...props 
}) => {
  const tagStyle = tagStyles[type] || tagStyles.general;
  const borderStyle = tagBorderStyles[type] || tagBorderStyles.general;

  return (
    <span 
      className={`
        inline-block 
        rounded-[50px] 
        transition-all
        ${isSelectable 
          ? `py-2 px-4 text-sm border-2
             ${isSelected 
               ? tagStyle 
               : `bg-white text-text-primary ${borderStyle} hover:${tagStyle}`}`
          : `px-[.6rem] py-[.2rem] text-[10px] ${tagStyle}`
        }
        ${isSelected && !isSelectable ? 'ring-2 ring-brand-jade' : ''}
        ${className}
      `}
      {...props}
    >
      {examinationLabels[type] || type}
    </span>
  );
};

export default ExaminationTag; 