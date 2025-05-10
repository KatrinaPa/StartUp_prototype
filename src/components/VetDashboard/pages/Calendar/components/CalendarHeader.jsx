import { format, endOfWeek, addDays } from 'date-fns'
import { lv } from 'date-fns/locale'

export default function CalendarHeader({ currentView, currentDate }) {
  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const formatDateRange = () => {
    switch(currentView) {
      case 'dayGridMonth':
        const month = capitalizeFirstLetter(format(currentDate, 'MMMM', { locale: lv }).replace('ā', 's'))
        return `${month}, ${format(currentDate, 'yyyy', { locale: lv })}`
      
      case 'timeGridWeek':
        // Add 6 days to get to the end of the week (showing 7 days total)
        const weekEnd = addDays(currentDate, 6)
        const weekMonth = format(currentDate, 'MMMM', { locale: lv }).replace('ā', 's')
        return `${format(currentDate, 'd', { locale: lv })}.-${format(weekEnd, 'd', { locale: lv })}.${weekMonth}, ${format(currentDate, 'yyyy', { locale: lv })}`
      
      case 'timeGridDay':
        const dayMonth = format(currentDate, 'MMMM', { locale: lv }).replace('ā', 's')
        return `${format(currentDate, 'd', { locale: lv })}.${dayMonth}, ${format(currentDate, 'yyyy', { locale: lv })}`
      
      default:
        return format(currentDate, 'd. MMMM yyyy', { locale: lv })
    }
  }

  return (
    <div className="calendar-header">
      <div className="calendar-filters">
        <select className="doctor-select">
          <option value="">Visi ārsti</option>
          <option>Dr. Anna Kļaviņa</option>
          <option>Dr. Pēteris Ozols</option>
        </select>
      </div>
      <div className="calendar-date">
        {formatDateRange()}
      </div>
    </div>
  )
} 