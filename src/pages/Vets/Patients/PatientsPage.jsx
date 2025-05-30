import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from '../../../components/common/SearchBar';
import PatientsTable from './components/PatientsTable';
import { patients } from '../../../data/patientsData_examples';
import { normalizeText } from '../../../utils/searchUtils';

const PatientsPage = () => {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get search query from URL when page loads
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setSearchValue(searchQuery);
    }
  }, [searchParams]);

  const sortedPatients = [...patients].sort((a, b) => 
    a.petName.localeCompare(b.petName)
  );

  const filteredPatients = sortedPatients.filter(patient => {
    const normalizedSearch = normalizeText(searchValue);
    const normalizedPetName = normalizeText(patient.petName);
    const normalizedOwnerName = normalizeText(patient.ownerName);

    return normalizedPetName.includes(normalizedSearch) ||
           normalizedOwnerName.includes(normalizedSearch);
  });

  const handlePetClick = (patientId) => {
    navigate(`/vet/patients/${patientId}`);
  };

  return (
    <div className="max-w-5xl my-8 mx-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-text-dark">Pacientu katalogs:</h1>
        <SearchBar 
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Meklēt pēc dzīvnieka vai saimnieka vārda"
        />
      </div>

      <PatientsTable 
        patients={filteredPatients}
        onPatientClick={handlePetClick}
      />

      <div className="flex justify-center gap-2 mt-6">
        <button className="px-3 py-1 rounded bg-brand-yellow text-text-light">1</button>
        <button className="px-3 py-1 rounded hover:bg-primary">3</button>
        <span className="px-3 py-1">...</span>
        <button className="px-3 py-1 rounded hover:bg-primary">11</button>
        <button className="px-3 py-1 rounded hover:bg-primary">12</button>
      </div>
    </div>
  );
};

export default PatientsPage; 