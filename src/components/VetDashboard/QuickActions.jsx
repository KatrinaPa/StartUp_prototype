import { useState } from 'react'
import { 
  FaCalendarAlt, 
  FaPlusCircle,
  FaPaw 
} from 'react-icons/fa'
import './quickActions.css'

export default function QuickActions({ activeButton, onActionClick, onPatientCatalogClick }) {
  const buttonClass = (buttonName) => {
    return `action-btn ${activeButton === buttonName ? 'active' : ''} ${activeButton === '' ? 'new-patient-view' : ''}`
  }

  const handlePatientsClick = () => {
    onActionClick('patients')
    onPatientCatalogClick?.() // Call the handler if it exists
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