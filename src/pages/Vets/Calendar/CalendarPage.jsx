import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import { getCalendarConfig } from './config/calendarConfig';
import { getWeekRange, formatDateRange } from '../../../utils/dateUtils';
import NewAppointmentModal from './components/NewAppointmentModal/NewAppointmentModal';
import './styles/calendar.css';

const CalendarPage = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(true);
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
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
    setSelectedTime(null);
    // Navigate back to calendar if we're on the "new" route
    if (location.pathname === '/vet/calendar/new') {
      window.history.pushState({}, '', '/vet/calendar');
    }
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
            select={handleDateSelect}
            selectable={true}
          />
        </div>
      </div>

      <NewAppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </div>
  );
};

export default CalendarPage; 