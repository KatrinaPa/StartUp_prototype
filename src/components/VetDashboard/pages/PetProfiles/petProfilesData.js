import { patients } from '../Patients/patientsData'

export const petProfiles = patients.map(patient => ({
  id: patient.id,
  name: patient.petName,
  petType: patient.petType,
  breed: patient.breed,
  birthDate: patient.birthDate,
  gender: patient.gender,
  reproductive: patient.reproductive,
  weight: patient.weight,
  ownerName: patient.ownerName,
  ownerPhone: patient.ownerPhone,
  ownerEmail: patient.ownerEmail,
  ownerAddress: patient.ownerAddress,
  vaccines: [
    { date: '2024-01-15', name: 'Nobivac DHPPi' },
    { date: '2023-07-20', name: 'Rabies' }
  ],
  lastVisit: patient.lastVisit,
  nextVisit: patient.nextVisit,
  visits: [
    {
      date: '2024-03-15',
      reason: 'Ikgadējā pārbaude',
      doctor: 'Dr. Anna Bērziņa'
    },
    {
      date: '2023-12-10',
      reason: 'Vakcinācija',
      doctor: 'Dr. Jānis Kalniņš'
    }
  ]
}))

export const getPetProfile = (id) => {
  return petProfiles.find(profile => profile.id === id)
}