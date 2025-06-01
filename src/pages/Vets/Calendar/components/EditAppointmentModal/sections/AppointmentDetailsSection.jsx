import { Label, Input, Select } from '../../../../../../components/common';
import { translatePetType } from '../../../../../../utils/petTypeUtils';
import { appointmentTypes, appointmentStatus, appointmentStatusLabels } from '../../../../../../data/appointmentTypes';

const AppointmentDetailsSection = ({ appointment, onChange }) => {
  const handleTypeChange = (e) => {
    onChange({
      ...appointment,
      type: e.target.value
    });
  };

  return (
    <div className="grid grid-cols-2 gap-6 pb-4 border-b border-border-light">
      <div>
        <Label>Pacients:</Label>
        <Input 
          type="text" 
          value={`${appointment.petName} (${translatePetType(appointment.petType)})`}
          readOnly 
        />
      </div>

      <div>
        <Label>Īpašnieks:</Label>
        <Input 
          type="text" 
          value={appointment.ownerName}
          readOnly 
        />
      </div>

      <div>
        <Label>Vizītes veids:</Label>
        <Select
          value={appointment.type}
          onChange={handleTypeChange}
          options={appointmentTypes}
        />
      </div>

      <div>
        <Label>Status:</Label>
        <Input 
          type="text" 
          value={appointmentStatusLabels[appointment.status]}
          readOnly 
          className={`${
            appointment.status === appointmentStatus.scheduled
              ? 'text-brand-mint' 
              : 'text-text-grey'
          }`}
        />
      </div>
    </div>
  );
};

export default AppointmentDetailsSection; 