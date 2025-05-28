# PetMedData - Veterinary Practice Management System

## Overview

PetMedData is a web-based veterinary practice management system built with React. It is designed to help veterinarians efficiently manage patient records, appointments, and medical histories.

This project is part of a school StartUp module and is currently in development. The concept and features are undergoing idea and user validation.

**[Prototype Vercel deployment will come!](xxx)**

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
│ ├── common/
│ │ ├── ActionButtons.jsx
│ │ ├── Button.jsx
│ │ ├── CloseButton.jsx
│ │ ├── ExaminationTag.jsx
│ │ ├── ExaminationTags.jsx
│ │ ├── IconButton.jsx
│ │ ├── IconSelector.jsx
│ │ ├── Input.jsx
│ │ ├── Label.jsx
│ │ ├── Modal.jsx
│ │ ├── SearchBar.jsx
│ │ ├── Select.jsx
│ │ ├── TextArea.jsx
│ │ ├── TimeSelect.jsx
│ │ ├── Icons/
│ │ │ ├── index.js
│ │ │ ├── PetTypeIcons.jsx
│ │ │ └── SidebarIcons.jsx
│ │ └── index.js
│ └── layout/
│ ├── MainLayout.jsx
│ └── headers/
│ ├── HomeHeader.jsx
│ ├── OwnerHeader.jsx
│ └── VetHeader.jsx
├── constants/
│ └── examinationLabels.js
├── data/
│ ├── examinationLabels.js
│ ├── patientsData_examples.js
│ ├── vaccinesData_examples.js
│ └── visitsData_examples.js
├── layouts/
│ └── VetLayout.jsx
├── pages/
│ ├── Home/
│ │ └── HomePage.jsx
│ ├── Owners/
│ │ └── Dashboard.jsx
│ └── Vets/
│ ├── Calendar/
│ │ ├── CalendarPage.jsx
│ │ ├── config/
│ │ │ └── calendarConfig.js
│ │ ├── styles/
│ │ │ └── calendar.css
│ │ └── components/
│ │ ├── NewAppointmentModal.jsx
│ │ └── sections/
│ │ ├── DateTimeSection.jsx
│ │ ├── VetSelection.jsx
│ │ ├── ExistingPatientSection.jsx
│ │ ├── NewPatientSection.jsx
│ │ ├── OwnerDetailsSection.jsx
│ │ ├── NotesSection.jsx
│ │ ├── NotificationPreferences.jsx
│ │ └── index.js
│ ├── Patients/
│ │ ├── PatientsPage.jsx
│ │ ├── PatientProfilePage.jsx
│ │ └── components/
│ │ ├── PatientsTable.jsx
│ │ └── PatientProfile/
│ │ ├── PetProfile.jsx
│ │ ├── VaccinationProtocol.jsx
│ │ ├── VisitHistory.jsx
│ │ ├── VisitProtocol.jsx
│ │ ├── components/
│ │ │ ├── PetImage.jsx
│ │ │ └── VaccinesList.jsx
│ │ └── index.js
│ ├── NewPatient/
│ │ └── NewPatientPage.jsx
│ ├── Dashboard.jsx
│ └── VetQuickActions.jsx
├── router/
│ ├── AppRoutes.jsx
│ └── ProtectedRoute.jsx
└── utils/
├── dateUtils.js
└── imageUtils.js
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
