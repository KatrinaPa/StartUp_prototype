import { format, addDays, subDays } from 'date-fns';
import { lv } from 'date-fns/locale';

/**
 * Calculates age from birth date
 * @param {Date} birthDate 
 * @returns {string} Age in years with "gadi" suffix
 */
export const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let years = today.getFullYear() - birth.getFullYear();
  
  if (today.getMonth() < birth.getMonth() || 
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
    years--;
  }
  return `${years} gadi`;
};

/**
 * Formats date to dd.mm.yyyy
 * @param {Date} date 
 * @returns {string} Formatted date
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('lv-LV', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

/**
 * Formats time to HH:mm
 * @param {Date} date 
 * @returns {string} Formatted time
 */
export const formatTime = (date) => {
  return format(new Date(date), 'HH:mm', { locale: lv });
};

/**
 * Formats date and time together
 * @param {Date} date 
 * @returns {string} Formatted date and time
 */
export const formatDateTime = (date) => {
  return format(new Date(date), 'dd.MM.yyyy HH:mm', { locale: lv });
};

/**
 * Gets the start and end dates for week view
 * @param {Date} today 
 * @returns {Object} weekStart and weekEnd dates
 */
export const getWeekRange = (today) => {
  const weekStart = subDays(today, 1);
  const weekEnd = addDays(weekStart, 6);
  return { weekStart, weekEnd };
};

/**
 * Formats a date range for display
 * @param {Date} start 
 * @param {Date} end 
 * @returns {string} Formatted date range
 */
export const formatDateRange = (start, end) => {
  return `${format(start, 'd.')}-${format(end, 'd.')}${format(end, 'MMMM')}, ${format(end, 'yyyy')}`.toLowerCase();
};

/**
 * Generates time slots for appointments
 * @param {number} startHour - Start hour (24h format)
 * @param {number} endHour - End hour (24h format)
 * @param {number} interval - Interval in minutes
 * @returns {Array} Array of time slots in HH:mm format
 */
export const generateTimeSlots = (startHour = 8, endHour = 20, interval = 30) => {
  const slots = [];
  const totalSlots = ((endHour - startHour) * 60) / interval;
  
  for (let i = 0; i < totalSlots; i++) {
    const hour = Math.floor(i * interval / 60) + startHour;
    const minute = (i * interval) % 60;
    slots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
  }
  
  return slots;
}; 