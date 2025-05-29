import { useEffect, useState } from 'react';
import { EditIcon, PetTypeIcons, OtherPetIcon } from '../../../../../components/common/Icons';
import { calculateAge, formatDate } from '../../../../../utils/dateUtils';
import { translatePetType } from '../../../../../utils/petTypeUtils';
import PetImage from './components/PetImage';
import VaccinesList from './components/VaccinesList';

const PetProfile = ({ patient }) => {
  const [age, setAge] = useState('');
  const PetIcon = PetTypeIcons[patient.petType] || OtherPetIcon;

  useEffect(() => {
    if (patient.birthDate) {
      setAge(calculateAge(patient.birthDate));
    }
  }, [patient.birthDate]);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        <PetImage imageName={patient.imageName} petName={patient.petName} />
        
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-text-primary">{patient.petName}</h1>
            <button className="text-brand-green hover:text-brand-green transition-transform transition-opacity duration-200 opacity-60 hover:opacity-100 hover:scale-105">
              <EditIcon className="w-8 h-8" />
            </button>
          </div>

          <div className="mb-4">
            <p className="text-text-secondary text-text-primary text-sm">
              <span className="font-medium text-text-secondary">Mikročipa Nr.: </span>
              {patient.chipNumber || '1234567890145'}
            </p>
          </div>

          <div className="text-text-secondary grid grid-cols-2 gap-y-3 gap-x-4 bg-primary py-2 px-4 rounded-xl text-sm">
            <div className="flex gap-2">
              <p>Suga:</p>
              <p className="font-medium text-text-primary">{translatePetType(patient.petType)}</p>
            </div>
            <div className="flex gap-2">
              <p>Krāsa:</p>
              <p className="font-medium text-text-primary">{patient.color || '—'}</p>
            </div>
            <div className="flex gap-2">
              <p>Dzimums:</p>
              <p className="font-medium text-text-primary">{patient.gender}</p>
            </div>
            <div className="flex">
              <p className="font-medium text-text-primary">{patient.reproductive}</p>
            </div>
            <div className="flex gap-2">
              <p>Šķirne:</p>
              <p className="font-medium text-text-primary">{patient.breed}</p>
            </div>
            <div className="flex gap-2">
              <p>Svars:</p>
              <p className="font-medium text-text-primary">{patient.weight} kg</p>
            </div>
            <div className="flex gap-2">
              <p>Vecums:</p>
              <p className="font-medium text-text-primary">{age}</p>
            </div>
            <div className="flex gap-2">
              <p>Dzimšanas datums:</p>
              <p className="font-medium text-text-primary">{formatDate(patient.birthDate)}</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4 border-border-light" />

      {/* Owner Info Section */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2 text-text-dark">Īpašnieka dati</h4>
        <div className="text-text-secondary grid grid-cols-2 space-y-1 bg-primary py-2 px-4 rounded-xl text-sm">
          <div className="flex gap-2">
            <p>Vārds, Uzvārds:</p>
            <p className="font-medium text-text-primary">{patient.ownerName}</p>
          </div>
          <div className="flex gap-2">
            <p>Telefons:</p>
            <p className="font-medium text-text-primary">{patient.ownerPhone}</p>
          </div>
          <div className="flex gap-2">
            <p>E-pasts:</p>
            <p className="font-medium text-text-primary">{patient.ownerEmail}</p>
          </div>
          <div className="flex gap-2">
            <p>Adrese:</p>
            <p className="font-medium text-text-primary">{patient.ownerAddress}</p>
          </div>
        </div>
      </div>

      <hr className="my-3 border-border-light" />
      
      <VaccinesList />
    </div>
  );
};

export default PetProfile;
