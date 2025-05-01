import { format, addDays } from 'date-fns'
import { lv } from 'date-fns/locale'
import AppointmentColumn from './components/AppointmentColumn'
import './appointments.css'

export default function Appointments({ onPetClick }) {
  const today = new Date()
  const tomorrow = addDays(today, 1)

  return (
    <div className="appointments">
      <div className="appointments-grid">
        <AppointmentColumn 
          title="Iepriekšējās vizītes:"
          className="previous"
          onPetClick={onPetClick}
        />
        <AppointmentColumn 
          title={`Šodien, ${format(today, 'd. MMMM', { locale: lv })}`}
          className="today"
          onPetClick={onPetClick}
        />
        <AppointmentColumn 
          title={`Rīt, ${format(tomorrow, 'd. MMMM', { locale: lv })}`}
          className="tomorrow"
          onPetClick={onPetClick}
        />
      </div>
    </div>
  )
} 