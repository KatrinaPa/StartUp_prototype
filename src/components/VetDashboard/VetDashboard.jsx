import { useState } from 'react'
import './vetDashboard.css'
import QuickActions from './QuickActions'
import NavbarVets from './NavbarVets'
import NewPatient from './pages/NewPatient/NewPatient'
import Appointments from './pages/Appointments/Appointments'
import SearchResults from './pages/SearchResults/SearchResults'
import Reports from './pages/Reports/Reports'
import Medications from './pages/Medications/Medications'
import Patients from './pages/Patients/Patients'
import NewAppointment from './pages/NewAppointment/NewAppointment'

export default function VetDashboard({ clinicName, doctorName }) {
  const [activeView, setActiveView] = useState('appointments')
  const [activeQuickAction, setActiveQuickAction] = useState('appointments')
  const [searchQuery, setSearchQuery] = useState('')

  const handleQuickActionClick = (view) => {
    setActiveView(view)
    setActiveQuickAction(view)
  }

  const handleNewPatientClick = () => {
    setActiveView('newPatient')
    setActiveQuickAction('')
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setActiveView('searchResults')
  }

  const handlePetClick = (petName) => {
    setSearchQuery(petName)
    setActiveView('searchResults')
  }

  const renderPage = () => {
    switch(activeView) {
      case 'newPatient':
        return <NewPatient />
      case 'newAppointment':
        return <NewAppointment />
      case 'appointments':
        return <Appointments onPetClick={handlePetClick} />
      case 'searchResults':
        return <SearchResults searchQuery={searchQuery} />
      case 'reports':
        return <Reports />
      case 'medications':
        return <Medications />
      case 'patients':
        return <Patients />
      default:
        return <Appointments />
    }
  }

  return (
    <div className="dashboard">
      <NavbarVets 
        clinicName={clinicName}
        doctorName={doctorName}
        onNewPatientClick={handleNewPatientClick}
        onSearch={handleSearch}
      />
      <div className="dashboard-layout">
        <div className="dashboard-sidebar">
          <QuickActions 
            activeButton={activeQuickAction} 
            onActionClick={handleQuickActionClick}
          />
        </div>
        <div className="dashboard-main">
          <div className="content-board">
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  )
} 