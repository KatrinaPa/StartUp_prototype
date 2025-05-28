import { Label, TextArea } from '../../../../../../components/common';

export default function NotesSection({ value, onChange }) {
  return (
    <div>
      <Label>Piezīmes par vizīti:</Label>
      <TextArea 
        rows={3}
        value={value}
        onChange={onChange}
        placeholder="Piezīmes par vizīti, veicamajām procedūrām..."
      />
    </div>
  );
} 