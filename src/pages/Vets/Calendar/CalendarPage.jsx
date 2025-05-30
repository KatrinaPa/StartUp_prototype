import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import { getCalendarConfig } from './config/calendarConfig';
import { getWeekRange, formatDateRange } from '../../../utils/dateUtils';
import NewAppointmentModal from './components/NewAppointmentModal';
import EditAppointmentModal from './components/EditAppointmentModal';
import { formatCalendarEvents } from './utils/calendarUtils';
import './styles/calendar.css';
import { appointments } from '../../../data/appointmentsExamples';

const CalendarPage = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const calendarEvents = formatCalendarEvents(appointments);

  const handleEventClick = (clickInfo) => {
    const appointment = clickInfo.event.extendedProps;
    setSelectedAppointment(appointment);
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    // Open modal if we're on the "new" route
    if (location.pathname === '/vet/calendar/new') {
      const now = new Date();
      setSelectedDate(now);
      setSelectedTime(now.toLocaleTimeString('lv-LV', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
      setIsNewModalOpen(true);
    }
  }, [location.pathname]);

  const handleDateSelect = (selectInfo) => {
    const { start } = selectInfo;
    setSelectedDate(start);
    setSelectedTime(start.toLocaleTimeString('lv-LV', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    }));
    setIsNewModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsNewModalOpen(false);
    setSelectedDate(null);
    setSelectedTime(null);
    // Navigate back to calendar if we're on the "new" route
    if (location.pathname === '/vet/calendar/new') {
      window.history.pushState({}, '', '/vet/calendar');
    }
  };

  const handleEditAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (editedAppointment) => {
    // Here you would typically update the appointment in your backend
    console.log('Saving edited appointment:', editedAppointment);
    setIsEditModalOpen(false);
  };

  const today = new Date();
  const { weekStart, weekEnd } = getWeekRange(today);
  const dateRangeStr = formatDateRange(weekStart, weekEnd);

  return (
    <div className="max-w-5xl my-8 mx-20 h-full">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Vizīšu kalendārs</h2>
          <div className="text-text-secondary">{dateRangeStr}</div>
        </div>
        
        <div className="flex-1 bg-white rounded-2xl">
          <FullCalendar
            {...getCalendarConfig(today)}
            events={calendarEvents}
            eventClick={handleEventClick}
            select={handleDateSelect}
            selectable={true}
          />
        </div>
      </div>

      <NewAppointmentModal
        isOpen={isNewModalOpen}
        onClose={handleCloseModal}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />

      {selectedAppointment && (
        <EditAppointmentModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          appointment={selectedAppointment}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default CalendarPage; 