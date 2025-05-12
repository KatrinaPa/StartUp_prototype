import { patients } from '../../Patients/patientsData'
import { addDays, subDays, setHours, setMinutes, startOfDay } from 'date-fns'
import { translatePetType } from '../../Patients/petTypeUtils'

const getPatient = (index) => patients[index % patients.length]

export const getDemoEvents = (currentDate) => {
  // Start with today at midnight to ensure consistent date comparisons
  const today = startOfDay(currentDate)

  const demoEvents = [
    // Past Events (6 events across 2 previous days)
    {
      patientIndex: 0,
      startHour: 9,
      startMinute: 0,
      daysOffset: -2,
      reason: 'Vakcinācija',
      vet: 'Dr. Anna Kļaviņa'
    },
    {
      patientIndex: 1,
      startHour: 11,
      startMinute: 30,
      daysOffset: -2,
      reason: 'Profilaktiskā pārbaude',
      vet: 'Dr. Anna Kļaviņa'
    },
    {
      patientIndex: 2,
      startHour: 10,
      startMinute: 0,
      daysOffset: -2,
      reason: 'Ķirurģiska operācija',
      vet: 'Dr. Pēteris Ozols'
    },
    {
      patientIndex: 3,
      startHour: 10,
      startMinute: 15,
      daysOffset: -1,
      reason: 'Vakcinācija',
      vet: 'Dr. Anna Kļaviņa'
    },
    {
      patientIndex: 4,
      startHour: 13,
      startMinute: 45,
      daysOffset: -1,
      reason: 'Profilaktiskā pārbaude',
      vet: 'Dr. Pēteris Ozols'
    },
    {
      patientIndex: 5,
      startHour: 12,
      startMinute: 30,
      daysOffset: -1,
      reason: 'Ķirurģiska operācija',
      vet: 'Dr. Pēteris Ozols'
    },

    // Today's Events (4 events)
    {
      patientIndex: 6,
      startHour: 9,
      startMinute: 30,
      daysOffset: 0,
      reason: 'Vakcinācija',
      vet: 'Dr. Anna Kļaviņa'
    },
    {
      patientIndex: 7,
      startHour: 11,
      startMinute: 0,
      daysOffset: 0,
      reason: 'Profilaktiskā pārbaude',
      vet: 'Dr. Anna Kļaviņa'
    },
    {
      patientIndex: 8,
      startHour: 14,
      startMinute: 30,
      daysOffset: 0,
      reason: 'Ķirurģiska operācija',
      vet: 'Dr. Pēteris Ozols'
    },
    {
      patientIndex: 9,
      startHour: 11,
      startMinute: 0,
      daysOffset: 0,
      reason: 'Vakcinācija',
      vet: 'Dr. Pēteris Ozols'
    },

    // Future Events (7 events across 4 next days)
    {
      patientIndex: 10,
      startHour: 10,
      startMinute: 0,
      daysOffset: 1,
      reason: 'Profilaktiskā pārbaude',
      vet: 'Dr. Anna Kļaviņa'
    },
    {
      patientIndex: 11,
      startHour: 13,
      startMinute: 30,
      daysOffset: 1,
      reason: 'Vakcinācija',
      vet: 'Dr. Pēteris Ozols'
    },
    {
      patientIndex: 12,
      startHour: 9,
      startMinute: 15,
      daysOffset: 2,
      reason: 'Ķirurģiska operācija',
      vet: 'Dr. Anna Kļaviņa'
    },
    {
      patientIndex: 13,
      startHour: 12,
      startMinute: 0,
      daysOffset: 2,
      reason: 'Profilaktiskā pārbaude',
      vet: 'Dr. Pēteris Ozols'
    },
    {
      patientIndex: 14,
      startHour: 11,
      startMinute: 45,
      daysOffset: 3,
      reason: 'Vakcinācija',
      vet: 'Dr. Anna Kļaviņa'
    },
    {
      patientIndex: 15,
      startHour: 8,
      startMinute: 15,
      daysOffset: 3,
      reason: 'Ķirurģiska operācija',
      vet: 'Dr. Pēteris Ozols'
    },
    {
      patientIndex: 16,
      startHour: 10,
      startMinute: 30,
      daysOffset: 4,
      reason: 'Profilaktiskā pārbaude',
      vet: 'Dr. Anna Kļaviņa'
    }
  ]

  return demoEvents.map(demo => {
    const patient = getPatient(demo.patientIndex)
    
    // Calculate date based on today at midnight
    const appointmentDate = demo.daysOffset === 0 ? today : 
                          demo.daysOffset > 0 ? addDays(today, demo.daysOffset) : 
                          subDays(today, Math.abs(demo.daysOffset))
    
    // Set time on the appointment date
    const startTime = setMinutes(setHours(appointmentDate, demo.startHour), demo.startMinute)
    const endTime = setMinutes(setHours(appointmentDate, demo.startHour + 1), demo.startMinute)

    // Determine event class based on daysOffset
    const eventClass = demo.daysOffset < 0 ? 'past-event' : 
                      demo.daysOffset === 0 ? 'today-event' : 
                      'future-event'

    return {
      id: `${patient.petId}-${demo.daysOffset}`,
      title: `${patient.petName} (${translatePetType(patient.petType)}) - ${demo.reason}`,
      start: startTime,
      end: endTime,
      extendedProps: {
        patientId: patient.petId,
        patientName: patient.petName,
        ownerName: patient.ownerName,
        petType: patient.petType,
        reason: demo.reason,
        vet: demo.vet
      },
      className: eventClass,
      display: 'block'
    }
  })
} 