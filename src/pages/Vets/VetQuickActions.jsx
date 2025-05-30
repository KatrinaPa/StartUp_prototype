import { Button } from '../../components/common';
import { SidebarIcons } from '../../components/common/Icons';
import { useLocation } from 'react-router-dom';

const VetQuickActions = ({ 
  onActionClick,
  onPatientCatalogClick,
  onNewAppointmentClick
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Check if we're on any patients-related page
  const isPatientSection = pathname.startsWith('/vet/patients');

  const handlePatientsClick = () => {
    onActionClick('patients');
    onPatientCatalogClick?.();
  };

  const iconClasses = `
    text-2xl
    text-text-primary
    [.active_&]:text-white
  `;

  return (
    <div className="flex flex-col gap-4 bg-bg-primary">
      <Button 
        variant="sidebar"
        className={`group ${pathname === '/vet/calendar' ? 'active' : ''}`}
        onClick={() => onActionClick('calendar')}
        icon={<SidebarIcons.Calendar className={iconClasses} />}
      >
        Vizīšu Kalendārs
      </Button>

      <Button 
        variant="sidebar"
        className={`group ${pathname === '/vet/calendar/new' ? 'active' : ''}`}
        onClick={onNewAppointmentClick}
        icon={<SidebarIcons.NewAppointment className={iconClasses} />}
      >
        Jauna Vizīte
      </Button>

      <Button 
        variant="sidebar"
        className={`group ${pathname === '/vet/new-patient' ? 'active' : ''}`}
        onClick={() => onActionClick('newPatient')}
        icon={<SidebarIcons.NewPatient className={iconClasses} />}
      >
        Jauns Pacients
      </Button>

      <Button 
        variant="sidebar"
        className={`group ${isPatientSection ? 'active' : ''}`}
        onClick={handlePatientsClick}
        icon={<SidebarIcons.Patients className={iconClasses} />}
      >
        Pacientu Katalogs
      </Button>
    </div>
  );
};

export default VetQuickActions; 