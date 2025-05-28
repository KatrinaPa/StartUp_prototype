import { addDays, subDays } from 'date-fns';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export const getCalendarConfig = (today) => ({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  initialDate: subDays(today, 3),
  slotMinTime: '08:00:00',
  slotMaxTime: '20:00:00',
  displayEventEnd: true,
  selectable: true,
  selectMirror: true,
  unselectAuto: false,
  editable: true,
  allDaySlot: false,
  locale: 'lv',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  buttonText: {
    today: 'Šodien',
    month: 'Mēnesis',
    week: 'Nedēļa',
    day: 'Diena',
    prev: '‹',
    next: '›'
  },
  slotLabelFormat: {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  },
  eventTimeFormat: {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  },
  slotEventOverlap: false,
  eventDisplay: 'block',
  expandRows: true,
  height: 'auto',
  stickyHeaderDates: true,
  nowIndicator: true,
  views: {
    customWeekView: {
      type: 'timeGrid',
      duration: { days: 7 },
      visibleRange: (currentDate) => {
        const start = subDays(currentDate, 3);
        const end = addDays(currentDate, 3);
        return { start, end };
      },
      slotDuration: '00:30:00',
      slotLabelInterval: '01:00',
      allDaySlot: false
    },
    dayGridMonth: {
      fixedWeekCount: false
    }
  },
  themeSystem: 'standard',
  eventColor: 'rgb(var(--brand-pink-rgb))',
  eventTextColor: '#FFFFFF',
  eventBorderColor: 'transparent',
  nowIndicatorClassNames: 'border-brand-pink',
  dayCellClassNames: 'text-text-secondary',
  slotLabelClassNames: 'text-text-secondary font-medium',
  dayHeaderClassNames: 'text-text-primary font-medium',
  dayMaxEvents: true,
  
  // Override all default FullCalendar styles
  bootstrapFontAwesome: false,
  buttonIcons: false
}); 