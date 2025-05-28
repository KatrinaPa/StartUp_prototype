import { Input, Label, IconSelector } from '../../../../../../components/common';
import { PetTypeIcons } from '../../../../../../components/common/Icons';

export default function NewPatientSection({ patient, onChange }) {
  const handleChange = (field) => (value) => {
    onChange({
      ...patient,
      [field]: typeof value === 'string' ? value : value.target.value
    });
  };

  return (
    <>
      <div>
        <Label>Jauns Pacients:</Label>
        <Input 
          type="text" 
          placeholder="Vārds"
          value={patient.name}
          onChange={handleChange('name')}
        />
      </div>
      
      <div className="grid grid-cols-[auto,1fr] gap-6">
        <IconSelector 
          icons={PetTypeIcons} 
          label="Dzīvnieks:"
          selectedIcon={patient.type}
          onSelect={handleChange('type')}
          labelClassName="text-text-secondary"
        />
        
        <div>
          <Label>Cits:</Label>
          <Input 
            type="text" 
            className="w-full"
            placeholder="Cita dzīvnieka veids"
            value={patient.otherType}
            onChange={handleChange('otherType')}
          />
        </div>
      </div>
    </>
  );
} 