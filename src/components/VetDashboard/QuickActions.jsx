import { useState } from 'react'
import { 
  FaCalendarAlt, 
  FaPlusCircle, 
  FaFileExport, 
  FaPills,
  FaUsers 
} from 'react-icons/fa'
import './quickActions.css'

export default function QuickActions({ activeButton, onActionClick }) {
  const buttonClass = (buttonName) => {
    return `action-btn ${activeButton === buttonName ? 'active' : ''} ${activeButton === '' ? 'new-patient-view' : ''}`
  }

  return (
    <div className="quick-actions">
      <button 
        className={buttonClass('appointments')}
        onClick={() => onActionClick('appointments')}
      >
        <FaCalendarAlt className="button-icon" />
        Vizītes
      </button>
      <button 
        className={buttonClass('newAppointment')}
        onClick={() => onActionClick('newAppointment')}
      >
        <FaPlusCircle className="button-icon" />
        Jauna vizīte
      </button>
      <button 
        className={buttonClass('reports')}
        onClick={() => onActionClick('reports')}
      >
        <FaFileExport className="button-icon" />
        Atskaites
      </button>
      <button 
        className={buttonClass('medications')}
        onClick={() => onActionClick('medications')}
      >
        <FaPills className="button-icon" />
        Medikamentu uzskaite
      </button>
      <button 
        className={buttonClass('patients')}
        onClick={() => onActionClick('patients')}
      >
        <FaUsers className="button-icon" />
        Pacientu katalogs
      </button>
    </div>
  )
} 