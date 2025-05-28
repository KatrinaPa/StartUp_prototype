import { Label, Select } from './';
import { generateTimeSlots } from '../../utils/dateUtils';

export default function TimeSelect({ 
  label = 'Laiks:', 
  value, 
  onChange,
  startHour = 8,
  endHour = 20,
  interval = 30,
  className = '',
  disabled = false
}) {
  const timeSlots = generateTimeSlots(startHour, endHour, interval);
  const options = timeSlots.map(time => ({ value: time, label: time }));

  return (
    <div className={className}>
      <Label>{label}</Label>
      <Select
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder="Izvēlēties laiku"
        options={options}
      />
    </div>
  );
} 