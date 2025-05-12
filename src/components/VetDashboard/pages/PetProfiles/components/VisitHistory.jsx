import { format } from 'date-fns'
import { lv } from 'date-fns/locale'
import './visitHistory.css'
import { useState } from 'react'
import NewAppointmentModal from '../../Calendar/components/NewAppointmentModal'

export default function VisitHistory({ pet }) {
  const [showNewAppointment, setShowNewAppointment] = useState(false)

  const previousVisits = [
    {
      date: '2024-03-10',
      time: '14:30',
      reason: 'Vakcinācija',
      vet: 'Dr. Anna Kļaviņa',
      examinations: ['vaccination']
    },
    {
      date: '2024-02-15',
      time: '10:00',
      reason: 'Profilaktiskā pārbaude',
      vet: 'Dr. Anna Kļaviņa',
      examinations: ['blood-test', 'usg']
    },
    {
      date: '2024-01-20',
      time: '16:45',
      reason: 'Ķirurģiska operācija',
      vet: 'Dr. Pēteris Ozols',
      examinations: ['rtg', 'blood-test']
    }
  ]

  const getExaminationLabel = (type) => {
    const labels = {
      'blood-test': 'Asins Analīzes',
      'usg': 'USG',
      'rtg': 'RTG',
      'vaccination': 'Vakcinācija'
    }
    return labels[type]
  }

  const handleNewAppointmentClick = () => {
    setShowNewAppointment(true)
  }

  return (
    <div className="pet-history">
      <div className="history-content">
        <h2>Iepriekšējās vizītes</h2>
        
        <div className="visits-list">
          {previousVisits.map((visit, index) => (
            <div key={index} className="visit-card">
              <div className="visit-info-wrapper">
                <div className="visit-header">
                  <div className="visit-date">
                    {format(new Date(visit.date), 'd. MMMM yyyy', { locale: lv })}
                  </div>
                  <div className="visit-time">{visit.time}</div>
                </div>
                <div className="visit-details">
                  <div className="visit-reason">{visit.reason}</div>
                  <div className="visit-vet">{visit.vet}</div>
                </div>
              </div>
              <hr className="visit-card-divider" />
              <div className="visit-examinations">
                {visit.examinations.map((exam, i) => (
                  <span key={i} className={`examination-tag ${exam}`}>
                    {getExaminationLabel(exam)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button 
          className="schedule-visit-btn"
          onClick={handleNewAppointmentClick}
        >
          Ieplānot vizīti
        </button>
      </div>

      {showNewAppointment && (
        <NewAppointmentModal
          onClose={() => setShowNewAppointment(false)}
          selectedDate={new Date()}
          selectedTime={null}
          setSelectedTime={() => {}}
          selectedPetType={null}
          setSelectedPetType={() => {}}
        />
      )}
    </div>
  )
} 