import { TimeSelect, Label, Input } from '../../../../../../components/common';
import { formatDate } from '../../../../../../utils/dateUtils';

const AppointmentDateSection = ({ appointment, onChange }) => {
  const handleTimeChange = (time) => {
    onChange({
      ...appointment,
      time
    });
  };

  return (
    <div className="grid grid-cols-3 gap-6 pb-4 border-b border-border-light">
      <div>
        <Label>Datums:</Label>
        <Input 
          type="text" 
          value={formatDate(new Date(appointment.date))}
          readOnly 
        />
      </div>

      <TimeSelect
        value={appointment.time}
        onChange={handleTimeChange}
      />

      <div>
        <Label>Veterinārārsts:</Label>
        <Input 
          type="text" 
          value="Dr. Anna Kļaviņa"
          readOnly 
        />
      </div>
    </div>
  );
};

export default AppointmentDateSection; 