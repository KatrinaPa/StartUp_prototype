import './appointmentColumn.css'
import dogIcon from '../../../../../assets/dog.png'
import catIcon from '../../../../../assets/cat.png'

export default function AppointmentColumn({ title, className, onPetClick }) {
  // Sample data - will be replaced with real data later
  const sampleAppointments = [
    {
      type: "Vakcinācija",
      time: "10:00-10:30",
      patientName: "Reksis",
      patientOwner: "Baiba Liepniece",
      petType: "dog"
    },
    {
      type: "Profilaktiskā apskate",
      time: "10:30-11:00",
      patientName: "Muris",
      patientOwner: "Gatis Krūmiņš",
      petType: "cat"
    },
    {
      type: "Ķirurģija",
      time: "11:00-11:30",
      patientName: "Luna",
      patientOwner: "Jānis Berzins",
      petType: "dog"
    },
    {
      type: "Izmeklējums šinšilai",
      time: "12:20-12:40",
      patientName: "Gaga",
      patientOwner: "Jana Ločmele",
      petType: "other"
    }
  ]

  const getPetIcon = (petType) => {
    switch(petType) {
      case 'dog':
        return <img src={dogIcon} alt="Dog" />
      case 'cat':
        return <img src={catIcon} alt="Cat" />
      default:
        return null
    }
  }

  return (
    <div className={`appointment-column ${className}`}>
      <h2 className="column-title">{title}</h2>
      <div className="appointment-cards">
        {sampleAppointments.map((appointment, index) => (
          <div 
            key={index} 
            className="appointment-card"
            onClick={() => onPetClick(appointment.patientName)}
            style={{ cursor: 'pointer' }}
          >
            <div className="appointment-card-left">
              <div className={`icon ${appointment.petType}`}>
                {getPetIcon(appointment.petType)}
              </div>
              <div className="patient-name">{appointment.patientName}</div>
            </div>

            <div className="appointment-card-right">
              <div className="appointment-type">{appointment.type}</div>
              <div className="appointment-time">{appointment.time}</div>
              <div className="patient-owner">{appointment.patientOwner}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 