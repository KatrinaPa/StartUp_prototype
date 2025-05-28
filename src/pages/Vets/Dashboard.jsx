import { Outlet, useNavigate } from 'react-router-dom';
import VetQuickActions from './VetQuickActions';

const VetDashboard = () => {
  const navigate = useNavigate();
  
  const handleActionClick = (action) => {
    switch(action) {
      case 'calendar':
        navigate('/vet/calendar');
        break;
      case 'newPatient':
        navigate('/vet/new-patient');
        break;
      case 'patients':
        navigate('/vet/patients');
        break;
      default:
        break;
    }
  };

  const handleNewAppointmentClick = () => {
    navigate('/vet/calendar/new');
  };

  return (
    <div className="flex gap-8">
      {/* Left Sidebar */}
      <aside className="w-[17%]">
        <VetQuickActions 
          onActionClick={handleActionClick}
          onNewAppointmentClick={handleNewAppointmentClick}
        />
      </aside>
      
      {/* Main Content Area */}
      <main className="w-[83%] bg-white rounded-[24px] "> {/* padding: p-6 */}
        <Outlet /> {/* outlet is used to render the child routes, default route is calendar. Documentation: https://reactrouter.com/en/main/components/outlet */}
      </main>
    </div>
  );
};

export default VetDashboard; 