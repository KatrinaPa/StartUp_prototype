import { Input, Label, TimeSelect } from '../../../../../../components/common';
import { formatDate } from '../../../../../../utils/dateUtils';

export default function DateTimeSection({ selectedDate, selectedTime, setSelectedTime }) {
  return (
    <>
      <div>
        <Label>Datums:</Label>
        <Input 
          type="text" 
          value={formatDate(selectedDate)} 
          readOnly 
        />
      </div>

      <TimeSelect
        value={selectedTime}
        onChange={setSelectedTime}
      />
    </>
  );
} 