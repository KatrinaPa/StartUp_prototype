export const appointmentTypes = [
  { value: 'Vakcinācija', label: 'Vakcinācija' },
  { value: 'Konsultācija', label: 'Konsultācija' },
  { value: 'Apskate', label: 'Apskate' },
  { value: 'Operācija', label: 'Operācija' }
];

export const appointmentStatus = {
  scheduled: 'scheduled',
  completed: 'completed'
};

export const appointmentStatusLabels = {
  [appointmentStatus.scheduled]: 'Ieplānots',
  [appointmentStatus.completed]: 'Pabeigts'
}; 