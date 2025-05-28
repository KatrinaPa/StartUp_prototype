import { Button } from './';
import { ActionIcons } from './Icons';

const ActionButtons = ({ 
  onCancel, 
  onSave, 
  onUpload,
  cancelText = "Atcelt", 
  saveText = "Saglabāt",
  uploadText = "Augšupielādēt izmeklējumus",
  showCancel = true,
  showUpload = false,
  className = ""
}) => {
  return (
    <div className={`flex justify-end gap-4 ${className}`}>
      {showCancel && (
        <Button 
          variant="tertiary"
          onClick={onCancel}
        >
          {cancelText}
        </Button>
      )}
      {showUpload && (
        <Button 
          variant="secondary"
          onClick={onUpload}
          icon={<ActionIcons.Upload />}
        >
          {uploadText}
        </Button>
      )}
      <Button 
        variant="primary"
        onClick={onSave}
      >
        {saveText}
      </Button>
    </div>
  );
};

export default ActionButtons; 