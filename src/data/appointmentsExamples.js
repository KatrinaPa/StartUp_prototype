import { addDays, subDays } from 'date-fns';
import { formatDateForApi } from '../utils/dateUtils';

const today = new Date();

export const patients = [
  {
    petId: 'P001',
    petName: 'Reksis',
    petType: 'dog',
    breed: 'Vācu aitu suns',
    ownerName: 'Anna Bērziņa',
    lastVisit: '2024-03-15',
    nextVisit: '2024-04-15'
  },
  {
    petId: 'P002',
    petName: 'Mincis',
    petType: 'cat',
    breed: 'Eiropas īsspaltainais kaķis',
    ownerName: 'Jānis Kalniņš',
    lastVisit: '2024-03-10',
    nextVisit: null
  },
  {
    petId: 'P003',
    petName: 'Zigis',
    petType: 'dog',
    breed: 'Jauktenis',
    ownerName: 'Pēteris Ozols',
    lastVisit: '2024-03-01',
    nextVisit: '2024-03-30'
  },
  {
    petId: 'P004',
    petName: 'Bella',
    petType: 'dog',
    breed: 'Labradors',
    ownerName: 'Līga Priede',
    lastVisit: '2024-03-12',
    nextVisit: null
  },
  {
    petId: 'P005',
    petName: 'Pūce',
    petType: 'cat',
    breed: 'Persiešu kaķis',
    ownerName: 'Māra Liepiņa',
    lastVisit: '2024-03-05',
    nextVisit: '2024-04-05'
  },
  {
    petId: 'P006',
    petName: 'Dūcis',
    petType: 'horse',
    breed: 'Latvijas šķirnes zirgs',
    ownerName: 'Andris Bērziņš',
    lastVisit: '2024-02-28',
    nextVisit: null
  },
  {
    petId: 'P007',
    petName: 'Riko',
    petType: 'dog',
    breed: 'Vācu aitu suns',
    ownerName: 'Ieva Kalniņa',
    lastVisit: '2024-03-14',
    nextVisit: '2024-04-14'
  },
  {
    petId: 'P008',
    petName: 'Maksis',
    petType: 'cat',
    breed: 'Maine Coon',
    ownerName: 'Jānis Priede',
    lastVisit: '2024-03-08',
    nextVisit: null
  }
];

export const appointments = [
  // Previous appointments
  {
    id: 1,
    patientId: 1,
    petName: "Luna",
    ownerName: "Anna Ozola",
    date: formatDateForApi(subDays(today, 2)),
    time: "09:00",
    type: "Vakcinācija",
    status: "completed"
  },
  {
    id: 2,
    patientId: 4,
    petName: "Bella",
    ownerName: "Līga Priede",
    date: formatDateForApi(subDays(today, 1)),
    time: "14:30",
    type: "Konsultācija",
    status: "completed"
  },
  // Today's appointments
  {
    id: 3,
    patientId: 7,
    petName: "Riko",
    ownerName: "Ieva Kalniņa",
    date: formatDateForApi(today),
    time: "09:00",
    type: "Apskate",
    status: "scheduled"
  },
  {
    id: 4,
    patientId: 12,
    petName: "Pūce",
    ownerName: "Māra Liepiņa",
    date: formatDateForApi(today),
    time: "11:30",
    type: "Vakcinācija",
    status: "scheduled"
  },
  {
    id: 5,
    patientId: 15,
    petName: "Dūcis",
    ownerName: "Andris Bērziņš",
    date: formatDateForApi(today),
    time: "14:00",
    type: "Konsultācija",
    status: "scheduled"
  },
  // Tomorrow's appointments
  {
    id: 6,
    patientId: 8,
    petName: "Maksis",
    ownerName: "Jānis Priede",
    date: formatDateForApi(addDays(today, 1)),
    time: "10:00",
    type: "Operācija",
    status: "scheduled"
  },
  {
    id: 7,
    patientId: 3,
    petName: "Zigis",
    ownerName: "Pēteris Ozols",
    date: formatDateForApi(addDays(today, 1)),
    time: "13:30",
    type: "Apskate",
    status: "scheduled"
  },
  // Day after tomorrow
  {
    id: 8,
    patientId: 2,
    petName: "Mincis",
    ownerName: "Jānis Kalniņš",
    date: formatDateForApi(addDays(today, 2)),
    time: "09:30",
    type: "Vakcinācija",
    status: "scheduled"
  },
  {
    id: 9,
    patientId: 5,
    petName: "Pūce",
    ownerName: "Māra Liepiņa",
    date: formatDateForApi(addDays(today, 2)),
    time: "15:00",
    type: "Konsultācija",
    status: "scheduled"
  },
  // Later this week
  {
    id: 10,
    patientId: 6,
    petName: "Dūcis",
    ownerName: "Andris Bērziņš",
    date: formatDateForApi(addDays(today, 3)),
    time: "11:00",
    type: "Apskate",
    status: "scheduled"
  },
  {
    id: 11,
    patientId: 9,
    petName: "Reksis",
    ownerName: "Anna Bērziņa",
    date: formatDateForApi(addDays(today, 3)),
    time: "16:30",
    type: "Operācija",
    status: "scheduled"
  }
]; 