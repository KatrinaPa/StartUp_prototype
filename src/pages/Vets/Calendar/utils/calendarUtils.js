/**
 * Converts appointments to FullCalendar events format
 * @param {Array} appointments - Array of appointments
 * @returns {Array} Formatted events for FullCalendar
 */
export const formatCalendarEvents = (appointments) => {
  return appointments.map(appointment => ({
    id: appointment.id,
    title: `${appointment.petName} - ${appointment.type}`,
    start: `${appointment.date}T${appointment.time}`,
    extendedProps: {
      ...appointment
    },
    className: `appointment-${appointment.status}`
  }));
}; 