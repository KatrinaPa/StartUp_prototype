import ExaminationTag from './ExaminationTag';

const ExaminationTags = ({ 
  examinations, 
  selectedExaminations = [], 
  onExaminationClick,
  isSelectable = false,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {examinations.map(type => (
        <div 
          key={type}
          onClick={() => onExaminationClick?.(type)}
          className={onExaminationClick ? "cursor-pointer" : ""}
        >
          <ExaminationTag 
            type={type} 
            isSelected={selectedExaminations.includes(type)}
            isSelectable={isSelectable}
          />
        </div>
      ))}
    </div>
  );
};

export default ExaminationTags; 