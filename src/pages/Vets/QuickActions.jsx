import { useNavigate } from 'react-router-dom';

const VetQuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-rows-4 gap-4 p-4">
      <button onClick={() => navigate('/vet/calendar')}>Vizīšu Kalendārs</button>
      <button onClick={() => navigate('/vet/calendar')}>Jauna Vizīte</button>
      <button onClick={() => navigate('/vet/new-patient')}>Jauns Pacients</button>
      <button onClick={() => navigate('/vet/patients')}>Pacientu Katalogs</button>
    </div>
  );
};

export default VetQuickActions; 