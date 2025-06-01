# PetMedData - Veterinary Practice Management System

## Overview

PetMedData is a web-based veterinary practice management system built with React. It is designed to help veterinarians efficiently manage patient records, appointments, and medical histories.

This project is part of a school StartUp module and is currently in development. The concept and features are undergoing idea and user validation.

**[Prototype Vercel deployment!](https://pet-data-fanv1av8c-petdatamed-projects-ec4d6da8.vercel.app/)**

## Screenshots

<p>
  <img src="" width="350" style="display: inline-block; margin-right: 110px;">
</p>

## Features

### For Veterinarians

- View and manage daily appointments
- Search and access patient profiles
- Add medical records, diagnoses, and treatments
- Generate official reports (PVD, LAD/LDC)

### For Pet Owners (Planned)

- View pet's medical history
- Access treatment records
- Track vaccination schedules

## Technical Stack

- React
- date-fns for date handling
- React Icons
- TailwindCSS and CSS for styling

## Project Structure (so far)

```
src/
├── components/
│ └── common/
│ ├── Button/
│ ├── Icons/
│ ├── Input/
│ ├── Modal/
│ ├── Select/
│ ├── TimeSelect/
│ └── NotificationPreferences/
├── data/
│ ├── appointmentTypes.js
│ ├── patientsData_examples.js
│ └── visitsData_examples.js
├── pages/
│ ├── Home/
│ │ └── HomePage.jsx
│ ├── Owners/
│ │ └── Dashboard/
│ └── Vets/
│ ├── Calendar/
│ │ ├── components/
│ │ │ ├── EditAppointmentModal/
│ │ │ │ ├── sections/
│ │ │ │ │ ├── AppointmentDateSection.jsx
│ │ │ │ │ ├── AppointmentDetailsSection.jsx
│ │ │ │ │ ├── NotesSection.jsx
│ │ │ │ │ └── index.js
│ │ │ │ ├── EditAppointmentModal.jsx
│ │ │ │ └── index.js
│ │ │ └── NewAppointmentModal/
│ │ │ ├── sections/
│ │ │ │ ├── DateTimeSection.jsx
│ │ │ │ ├── ExistingPatientSection.jsx
│ │ │ │ ├── NewPatientSection.jsx
│ │ │ │ ├── NotesSection.jsx
│ │ │ │ ├── OwnerDetailsSection.jsx
│ │ │ │ ├── VetSelection.jsx
│ │ │ │ └── index.js
│ │ │ ├── NewAppointmentModal.jsx
│ │ │ └── index.js
│ │ ├── styles/
│ │ │ └── calendar.css
│ │ ├── utils/
│ │ │ └── calendarUtils.js
│ │ ├── CalendarPage.jsx
│ │ └── NewAppointmentPage.jsx
│ ├── Dashboard/
│ ├── NewPatient/
│ └── Patients/
│ ├── components/
│ │ └── PatientProfile/
│ │ ├── PetProfile.jsx
│ │ └── VisitHistory.jsx
│ ├── PatientProfilePage.jsx
│ └── PatientsPage.jsx
├── router/
│ ├── AppRoutes.jsx
│ └── ProtectedRoute.jsx
├── utils/
│ ├── dateUtils.js
│ └── petTypeUtils.js
└── App.jsx
```

### Key Components

- **Calendar/** - Veterinary appointment calendar system

  - Full week view centered on current date
  - Day and month view options
  - Appointment creation and management
  - Appointment details editing

- **NewPatient/** - New patient registration form

  - Add new pets to the system
  - Collect owner and pet information

- **Patients/** - Patient catalog and management

  - List of all pet patients
  - Patient filtering and search
  - Pet type categorization

- **PetProfiles/** - Detailed pet information
  - Individual pet profiles
  - Medical history
  - Owner information
  - Vaccination records
  - Visit history
  - Visit protocol
  - Vaccination protocol
