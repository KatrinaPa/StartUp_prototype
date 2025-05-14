import { format } from 'date-fns'
import { lv } from 'date-fns/locale'
import { FaEdit } from 'react-icons/fa'
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
      examinations: ['blood-test', 'usg']
    },
    {
      date: '2024-02-15',
      time: '10:00',
      reason: 'Profilaktiskā pārbaude',
      vet: 'Dr. Anna Kļaviņa',
      examinations: ['vaccination'] 
    },
    {
      date: '2024-01-20',
      time: '16:45',
      reason: 'Ķirurģiska operācija',
      vet: 'Dr. Pēteris Ozols',
      examinations: ['general', 'rtg', 'blood-test']
    }
  ]

  const nextVisitDate = '2025-06-17' // This should come from props or API

  const getExaminationLabel = (type) => {
    const labels = {
      'blood-test': 'Asins analīzes',
      'usg': 'USG',
      'rtg': 'RTG',
      'vaccination': 'Vakcinācija',
      'general': 'Vispārēja apskate'
    }
    return labels[type] || type
  }

  const handleNewAppointmentClick = () => {
    setShowNewAppointment(true)
  }

  return (
    <div className="visits-history">
      <div className="visits-history-table">
      <h3>Iepriekšējās vizītes:</h3>
      <table>
        <thead>
          <tr>
            <th>Datums</th>
            <th>Mērķis</th>
            <th>Izmeklējumi</th>
          </tr>
        </thead>
        <tbody>
          {previousVisits.map((visit, index) => (
            <tr key={index} className="visit-row">
              <td>
                {format(new Date(visit.date), 'dd.MM.yyyy', { locale: lv })}
              </td>
              <td>{visit.reason}</td>
              <td>
                <div className="examination-tags">
                  {visit.examinations.map((exam, i) => (
                    <span key={i} className={`examination-tag ${exam}`}>
                      {getExaminationLabel(exam)}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>

      <div className="next-visit-info">
        <div className="next-visit-date">
          <span>Nākamā vizīte:</span>
          {format(new Date(nextVisitDate), 'dd.MM.yyyy', { locale: lv })}
        </div>
        <button className="edit-next-visit" aria-label="Rediģēt nākamo vizīti">
          <FaEdit />
        </button>
      </div>

      <button 
        className="schedule-visit-btn"
        onClick={handleNewAppointmentClick}
      >
        Ieplānot vizīti
      </button>

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