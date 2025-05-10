import { FaArrowLeft } from 'react-icons/fa'
import PetProfile from './components/PetProfile'
import VisitHistory from './components/VisitHistory'
import VisitProtocol from './components/VisitProtocol'
import './patientView.css'

export default function PatientView({ pet, onClose }) {
  return (
    <div className="patient-view">
      <button className="back-to-catalog-btn" onClick={onClose}>
        <FaArrowLeft />
        Atgriezties Pacientu katalogā
      </button>
      <div className="results-grid">
        <div className="top-row">
          <PetProfile pet={pet} onClose={onClose} />
          <VisitHistory pet={pet} />
        </div>
        <div className="bottom-row">
          <VisitProtocol pet={pet} />
        </div>
      </div>
    </div>
  )
} 