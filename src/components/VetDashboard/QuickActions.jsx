import { 
  FaCalendarAlt, 
  FaPlusCircle,
  FaPaw,
  FaUserPlus,
} from 'react-icons/fa'
import './quickActions.css'

export default function QuickActions({ 
  activeButton, 
  onActionClick,
  onPatientCatalogClick,
  onNewAppointmentClick
}) {
  const buttonClass = (buttonName) => {
    return `action-btn ${activeButton === buttonName ? 'active' : ''} ${activeButton === '' ? 'new-patient-view' : ''}`
  }

  const handlePatientsClick = () => {
    onActionClick('patients')
    onPatientCatalogClick?.()
  }

  return (
    <div className="quick-actions">
      <button 
        className={buttonClass('calendar')}
        onClick={() => onActionClick('calendar')}
      >
        <FaCalendarAlt className="button-icon" />
        Kalendārs
      </button>

      <button 
        className={buttonClass('newAppointment')}
        onClick={onNewAppointmentClick}
      >
        <FaUserPlus className="button-icon" />
        <span>Jauna vizīte</span>
      </button>

      <button 
        className={buttonClass('newPatient')}
        onClick={() => onActionClick('newPatient')}
      >
        <FaPlusCircle className="button-icon" />
        Jauns Pacients
      </button>

      <button 
        className={buttonClass('patients')}
        onClick={handlePatientsClick}
      >
        <FaPaw className="button-icon" />
        Pacientu katalogs
      </button>
    </div>
  )
} 