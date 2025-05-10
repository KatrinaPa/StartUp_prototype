# PetMedData - Veterinary Practice Management System

## Overview

PetMedData is a web-based veterinary practice management system built with React. It is designed to help veterinarians efficiently manage patient records, appointments, and medical histories.

This project is part of a school StartUp module and is currently in development. The concept and features are undergoing idea and user validation.

**[Prototype Vercel deployment!](https://petmeddataproto-4gycmxxte-katrinas-projects-ec4d6da8.vercel.app/)**

## Screenshots

<p>
  <img src="/src/assets/scr1.png" width="350" style="display: inline-block; margin-right: 90px;">
  <img src="/src/assets/scr2.png" width="350" style="display: inline-block; margin-right: 90px;">
  <img src="/src/assets/scr3.png" width="350" style="display: inline-block; margin-right: 90px;">
  <img src="/src/assets/scr4.png" width="350" style="display: inline-block;">
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
- CSS Modules for styling

## Project Structure (so far)

```
src/
├── components/
│   ├── VetDashboard/
│   │   ├── pages/
│   │   │   ├── Calendar/
│   │   │   │   ├── components/
│   │   │   │   │   ├── CalendarHeader.jsx
│   │   │   │   │   ├── NewAppointmentModal.jsx
│   │   │   │   │   └── AppointmentDetailsModal.jsx
│   │   │   │   ├── config/
│   │   │   │   │   └── calendarConfig.js
│   │   │   │   ├── data/
│   │   │   │   │   └── demoEvents.js
│   │   │   │   ├── Calendar.jsx
│   │   │   │   └── calendar.css
│   │   │   ├── NewPatient/
│   │   │   │   ├── NewPatient.jsx
│   │   │   │   └── newPatient.css
│   │   │   ├── Patients/
│   │   │   │   ├── patientsData.js
│   │   │   │   ├── petTypeUtils.js
│   │   │   │   ├── Patients.jsx
│   │   │   │   └── patients.css
│   │   │   └── PetProfiles/
│   │   │       ├── components/
│   │   │       │   ├── PetProfile.jsx
│   │   │       │   └── petProfile.css
│   │   │       ├── PatientView.jsx
│   │   │       ├── patientView.css
│   │   │       └── petProfilesData.js
│   │   ├── NavbarVets.jsx
│   │   └── QuickActions.jsx
│   ├── auth/
│   └── home/
├── assets/
│   └── pet-profiles/
└── App.jsx
```

### Key Components

- **Calendar/** - Veterinary appointment calendar system

  - Full week view centered on current date
  - Day and month view options
  - Appointment creation and management

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
