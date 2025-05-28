import { Label, Select } from '../../../../../../components/common';

const VET_OPTIONS = [
  { value: 'anna', label: 'Dr. Anna Kļaviņa' },
  { value: 'peteris', label: 'Dr. Pēteris Ozols' }
];

export default function VetSelection({ value, onChange }) {
  return (
    <div>
      <Label>Veterinārārsts:</Label>
      <Select
        value={value}
        onChange={onChange}
        placeholder="Izvēlēties ārstu"
        options={VET_OPTIONS}
      />
    </div>
  );
}