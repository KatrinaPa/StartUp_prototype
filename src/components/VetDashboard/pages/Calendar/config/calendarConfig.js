import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export const calendarConfig = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: "timeGridWeek",
  duration: { days: 7 },
  showNonCurrentDates: true,
  fixedWeekCount: false,
  dayCount: 7,
  firstDay: -3,
  headerToolbar: {
    left: 'prev,next today',
    center: '',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  slotMinTime: "08:00:00",
  slotMaxTime: "20:00:00",
  expandRows: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  locale: "lv",
  allDaySlot: false,
  slotLabelFormat: {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  },
  buttonText: {
    today: 'Šodien',
    month: 'Mēnesis',
    week: 'Nedēļa',
    day: 'Diena'
  }
} 