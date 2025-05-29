import { addDays, subDays, setHours, setMinutes, startOfDay } from 'date-fns';
import { patients } from './appointmentsExamples';
import { translatePetType } from '../utils/petTypeUtils';

const getPatient = (index) => patients[index % patients.length];

export const getDemoEvents = (currentDate) => {
  // Your provided code here...
}; 