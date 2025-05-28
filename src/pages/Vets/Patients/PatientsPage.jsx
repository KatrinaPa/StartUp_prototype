import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../../components/common/SearchBar';
import PatientsTable from './components/PatientsTable';
import { patients } from '../../../data/patientsData_examples';

const PatientsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const sortedPatients = [...patients].sort((a, b) => 
    a.petName.localeCompare(b.petName)
  );

  const filteredPatients = sortedPatients.filter(patient => 
    patient.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.ownerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePetClick = (patientId) => {
    navigate(`/vet/patients/${patientId}`);
  };

  return (
    <div className="max-w-5xl my-8 mx-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-text-dark">Pacientu katalogs:</h1>
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Meklēt pēc dzīvnieka vai saimnieka vārda"
        />
      </div>

      <PatientsTable 
        patients={filteredPatients}
        onPatientClick={handlePetClick}
      />

      <div className="flex justify-center gap-2 mt-6">
        <button className="px-3 py-1 rounded bg-brand-jade text-text-light">1</button>
        <button className="px-3 py-1 rounded hover:bg-lighter-grey">2</button>
        <button className="px-3 py-1 rounded hover:bg-lighter-grey">3</button>
        <span className="px-3 py-1">...</span>
        <button className="px-3 py-1 rounded hover:bg-lighter-grey">11</button>
        <button className="px-3 py-1 rounded hover:bg-lighter-grey">12</button>
      </div>
    </div>
  );
};

export default PatientsPage; 