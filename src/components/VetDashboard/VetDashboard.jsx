import { useState } from 'react'
import './vetDashboard.css'
import QuickActions from './QuickActions'
import NavbarVets from './NavbarVets'
import NewPatient from './pages/NewPatient/NewPatient'
import Patients from './pages/Patients/Patients'
import Calendar from './pages/Calendar/Calendar'
import { patients } from './pages/Patients/patientsData'

export default function VetDashboard({ clinicName, doctorName }) {
  const [activeView, setActiveView] = useState('calendar')
  const [activeQuickAction, setActiveQuickAction] = useState('calendar')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPet, setSelectedPet] = useState(null)

  const handleQuickActionClick = (view) => {
    setActiveView(view)
    setActiveQuickAction(view)
    if (view === 'patients') {
      setSelectedPet(null)
      setSearchQuery('')
    }
  }

  const handleNewPatientClick = () => {
    setActiveView('newPatient')
    setActiveQuickAction('')
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setActiveView('patients')
    setSelectedPet(null) // Clear selected pet to show the filtered list
  }

  const handlePatientCatalogClick = () => {
    setSelectedPet(null)
    setSearchQuery('')
    setActiveView('patients')
  }

  const renderPage = () => {
    switch(activeView) {
      case 'newPatient':
        return <NewPatient />
      case 'calendar':
        return <Calendar />
      case 'patients':
        return <Patients 
          selectedPet={selectedPet} 
          setSelectedPet={setSelectedPet}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      default:
        return <Calendar />
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
            onPatientCatalogClick={handlePatientCatalogClick}
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