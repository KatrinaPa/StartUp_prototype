import { useState, useEffect, useCallback } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { format, addDays, subDays, startOfWeek, endOfWeek } from 'date-fns'
import { lv } from 'date-fns/locale'
import { calendarConfig } from './config/calendarConfig'
import CalendarHeader from './components/CalendarHeader'
import NewAppointmentModal from './components/NewAppointmentModal'
import AppointmentDetailsModal from './components/AppointmentDetailsModal'
import { getDemoEvents } from './data/demoEvents'
import './calendar.css'

export default function Calendar({ showNewAppointment, setShowNewAppointment }) {
    // Controls visibility of the new appointment modal:
    const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false)
    // Controls visibility of the appointment details modal:
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedPetType, setSelectedPetType] = useState(null)
    // Stores the appointment data when viewing existing appointment details:
    const [selectedAppointment, setSelectedAppointment] = useState(null)

    const today = new Date()
    
    // Get 2 days before and 4 days after today
    const weekStart = subDays(today, 2)
    const weekEnd = addDays(today, 4)

    // Format the date range for display
    const dateRangeStr = `${format(weekStart, 'd.')}-${format(weekEnd, 'd.')}${format(weekEnd, 'MMMM')}, ${format(weekEnd, 'yyyy')}`.toLowerCase()

    const handleDateSelect = useCallback((selectInfo) => {
        setSelectedDate(selectInfo.start)
        setSelectedTime(format(selectInfo.start, 'HH:mm'))
        setShowNewAppointmentModal(true)
    }, [])

    const handleEventClick = useCallback((clickInfo) => {
        setSelectedAppointment(clickInfo.event)
        setShowDetailsModal(true)
    }, [])

    useEffect(() => {
        if (showNewAppointment) {
            const now = new Date()
            setSelectedDate(now)
            setSelectedTime(format(now, 'HH:mm'))
            setShowNewAppointmentModal(true)
            setShowNewAppointment(false)
        }
    }, [showNewAppointment, setShowNewAppointment])

    const calendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'timeGridWeek',
        initialDate: today,
        firstDay: 1, // Start week on Monday
        slotMinTime: '08:00:00',
        slotMaxTime: '20:00:00',
        displayEventEnd: true,
        selectable: true,
        editable: true,
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
            day: 'Diena'
        },
        views: {
            timeGridWeek: {
                visibleRange: {
                    start: weekStart,
                    end: addDays(weekEnd, 1)
                }
            }
        }
    }

    return (
        <div className="calendar-page-wrapper">
            <div className="calendar-page">
                <div className="calendar-header">
                    <h2>Darba kalendārs</h2>
                    <div className="calendar-date">{dateRangeStr}</div>
                </div>
                
                <div className="calendar-container">
                    <FullCalendar
                        {...calendarOptions}
                        events={getDemoEvents(new Date())}
                        select={handleDateSelect}
                        eventClick={handleEventClick}
                    />
                </div>

                {/* Modal for creating new appointment */}
                {showNewAppointmentModal && (
                    <NewAppointmentModal
                        onClose={() => setShowNewAppointmentModal(false)}
                        selectedDate={selectedDate}
                        selectedTime={selectedTime}
                        setSelectedTime={setSelectedTime}
                        selectedPetType={selectedPetType}
                        setSelectedPetType={setSelectedPetType}
                    />
                )}

                {/* Modal for viewing/editing existing appointment */}
                {showDetailsModal && selectedAppointment && (
                    <AppointmentDetailsModal
                        appointment={selectedAppointment}
                        onClose={() => {
                            setShowDetailsModal(false)
                            setSelectedAppointment(null)
                        }}
                    />
                )}
            </div>
        </div>
    )
} 