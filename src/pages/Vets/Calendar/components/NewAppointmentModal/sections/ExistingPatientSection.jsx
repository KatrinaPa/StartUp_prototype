import { Input, Label } from '../../../../../../components/common';

export default function ExistingPatientSection({ patient, onChange }) {
  const handleChange = (field) => (e) => {
    onChange({ ...patient, [field]: e.target.value });
  };

  return (
    <>
      <div>
        <Label>Esošs Pacients:</Label>
        <Input 
          type="text" 
          placeholder="Meklēt pēc vārda"
          value={patient.name}
          onChange={handleChange('name')}
        />
      </div>
      <div>
        <Label>Īpašnieks:</Label>
        <Input 
          type="text" 
          placeholder="Īpašnieka vārds (automātiski, ja ievadīts dzīvnieks)" 
          value={patient.owner}
          onChange={handleChange('owner')}
          readOnly 
        />
      </div>
    </>
  );
} 