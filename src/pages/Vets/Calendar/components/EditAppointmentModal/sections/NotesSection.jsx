import { Label, TextArea } from '../../../../../../components/common';

const NotesSection = ({ value, onChange }) => {
  return (
    <div className="pb-4 border-b border-border-light">
      <Label>Piezīmes par vizīti:</Label>
      <TextArea 
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Piezīmes par vizīti, veicamajām procedūrām..."
        className="w-full"
      />
    </div>
  );
};

export default NotesSection; 