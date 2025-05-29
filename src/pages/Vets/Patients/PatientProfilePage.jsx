import { useParams, useNavigate } from 'react-router-dom';
import { BackIcon } from '../../../components/common/Icons';
import { patients } from '../../../data/patientsData_examples';
import { PetProfile, VisitHistory, VisitProtocol } from './components/PatientProfile';

const PatientProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const patient = patients.find(p => p.id === Number(id));

  const handleBack = () => {
    navigate('/vet/patients');
  };

  if (!patient) {
    return (
      <div className="p-6 text-center text-text-secondary">
        Pacients nav atrasts
      </div>
    );
  }

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto space-y-6">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-text-dark hover:text-brand-green hover:font-bold"
        ><BackIcon className="w-4 h-4" /><span>Atgriezties Pacientu katalogā</span>
        </button>
        
        {/* Pet Profile and Visit History Section - 2:1 ratio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pet Profile takes 2/3 width */}
          <div className="lg:col-span-2">
            <PetProfile patient={patient} />
          </div>
          {/* Visit History takes 1/3 width */}
          <div className="lg:col-span-1">
            <VisitHistory patientId={patient.id} />
          </div>
        </div>

        {/* Visit Protocol Section - Full width */}
        <div className="w-full">
          <VisitProtocol patientId={patient.id} />
        </div>
      </div>
    </div>
  );
};

export default PatientProfilePage; 