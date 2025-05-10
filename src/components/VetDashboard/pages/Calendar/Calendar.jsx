import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { format } from 'date-fns'
import { calendarConfig } from './config/calendarConfig'
import CalendarHeader from './components/CalendarHeader'
import NewAppointmentModal from './components/NewAppointmentModal'
import AppointmentDetailsModal from './components/AppointmentDetailsModal'
import { getDemoEvents } from './data/demoEvents'
import './calendar.css'

export default function Calendar() {
    // Controls visibility of the new appointment modal:
    const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false)
    // Controls visibility of the appointment details modal:
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedPetType, setSelectedPetType] = useState(null)
    // Stores the appointment data when viewing existing appointment details:
    const [selectedAppointment, setSelectedAppointment] = useState(null)
    const [currentView, setCurrentView] = useState('timeGridWeek')
    const [currentDate, setCurrentDate] = useState(new Date())

    // Handles when user selects a time slot to create new appointment and sets the selected date and time:
    const handleDateSelect = (selectInfo) => {
        setSelectedDate(selectInfo.start)
        setSelectedTime(format(selectInfo.start, 'HH:mm'))
        setShowNewAppointmentModal(true)
    }

    // Handles when user clicks on an existing appointment and sets the selected appointment data:
    const handleEventClick = (clickInfo) => {
        setSelectedAppointment(clickInfo.event)
        setShowDetailsModal(true)
    }

    const handleViewChange = (info) => {
        setCurrentView(info.view.type)
        setCurrentDate(info.view.currentStart)
    }

    return (
        <div className="calendar-page-wrapper">
        <div className="calendar-page">
            <CalendarHeader 
                currentView={currentView}
                currentDate={currentDate}
            />
            
            <div className="calendar-container">
            <FullCalendar
                {...calendarConfig}
                events={getDemoEvents(new Date())}
                select={handleDateSelect}
                eventClick={handleEventClick}
                datesSet={handleViewChange}
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