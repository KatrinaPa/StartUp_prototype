import { Input, Label } from '../../../../../../components/common';

export default function OwnerDetailsSection({ owner, onChange }) {
  const handleChange = (field) => (e) => {
    onChange({ ...owner, [field]: e.target.value });
  };

  return (
    <>
      <div>
        <Label>Īpašnieks:</Label>
        <Input 
          type="text" 
          placeholder="Vārds Uzvārds"
          value={owner.name}
          onChange={handleChange('name')}
        />
      </div>
      <div>
        <Label>Tālrunis:</Label>
        <Input 
          type="tel" 
          placeholder="+371 xxxxxxxx"
          value={owner.phone}
          onChange={handleChange('phone')}
        />
      </div>
      <div>
        <Label>E-pasts:</Label>
        <Input 
          type="email" 
          placeholder="epasts@piemers.lv"
          value={owner.email}
          onChange={handleChange('email')}
        />
      </div>
    </>
  );
} 