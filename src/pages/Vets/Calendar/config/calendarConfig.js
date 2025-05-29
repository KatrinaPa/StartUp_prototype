import { addDays, subDays } from 'date-fns';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { getWeekRange } from '../../../../utils/dateUtils';

export const getCalendarConfig = (today) => ({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  initialDate: subDays(today, 1),
  views: {
    timeGridWeek: {
      type: 'timeGrid',
      duration: { days: 7 },
      visibleRange: (currentDate) => {
        const { weekStart, weekEnd } = getWeekRange(today);
        return { 
          start: weekStart,
          end: weekEnd 
        };
      }
    },
    dayGridMonth: {
      fixedWeekCount: false
    }
  },
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
    timeGridWeek: 'Nedēļa',
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
  themeSystem: 'standard',
  eventColor: 'rgb(var(--brand-green-rgb))',
  eventTextColor: '#FFFFFF',
  eventBorderColor: 'transparent',
  nowIndicatorClassNames: 'border-brand-green',
  dayCellClassNames: 'text-text-secondary',
  slotLabelClassNames: 'text-text-secondary font-medium',
  dayHeaderClassNames: 'text-text-primary font-medium',
  dayMaxEvents: true,
  
  // Override all default FullCalendar styles
  bootstrapFontAwesome: false,
  buttonIcons: false
}); 