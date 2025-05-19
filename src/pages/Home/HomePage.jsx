import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleUserTypeSelection = async (type) => {
    await login({ username: 'test' }, type);
    navigate(`/${type}`);
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-8">Pieslēdzies kā:</h1>
      <div className="grid grid-cols-2 gap-8">
        <button
          onClick={() => handleUserTypeSelection('vet')}
          className="p-8 bg-btn-vet rounded-lg hover:opacity-60"
        >Veterinārārsts
        </button>
        
        <button
          onClick={() => handleUserTypeSelection('owner')}
          className="p-8 bg-btn-owner rounded-lg hover:opacity-60"
        >Dzīvnieka īpašnieks
        </button>
      </div>
    </div>
  );
};

export default HomePage; 