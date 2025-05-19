import { useNavigate } from 'react-router-dom';

const OwnerQuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-rows-3 gap-4 p-4">
      <button>Mani dzīvnieki</button>
      <button>Vizītes</button>
      <button>Medicīnas vēsture</button>
    </div>
  );
};

export default OwnerQuickActions; 