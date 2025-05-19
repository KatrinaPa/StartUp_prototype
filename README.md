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
- CSS Modules for styling

## Project Structure (so far)

```
├── src
│   ├── App.jsx
│   ├── assets                 # Images, icons, SVGs
│   ├── components
│   │   ├── common             # Reusable UI components (btns, icons, cards etc)
│   │   └── layout
│   │       ├── Footer.jsx
│   │       ├── MainLayout.jsx
│   │       └── headers
│   │           ├── HomeHeader.jsx
│   │           ├── OwnerHeader.jsx
│   │           └── VetHeader.jsx
│   ├── context                # React contexts (auth, user, etc.)
│   ├── data                   # Local JSON data or mock data
│   ├── index.css              # Global styles, branding, CSS variables
│   ├── main.jsx               # App entry point
│   ├── pages                  # Route-based views
│   │   ├── Home
│   │   │   └── HomePage.jsx
│   │   ├── Owners
│   │   │   ├── Dashboard.jsx
│   │   │   └── QuickActions.jsx
│   │   └── Vets
│   │       ├── Calendar
│   │       │   └── CalendarPage.jsx
│   │       ├── Dashboard.jsx
│   │       ├── NewPatient
│   │       │   └── NewPatientPage.jsx
│   │       ├── Patients
│   │       │   └── PatientsPage.jsx
│   │       └── QuickActions.jsx
│   ├── router
│   │   ├── AppRoutes.jsx      # Route definitions
│   │   └── ProtectedRoute.jsx # Auth guard component
│   ├── services               # API calls and integrations
│   └── utils                  # Helper functions (e.g. dateFormat, API helpers)
├── tailwind.config.js         # Tailwind theme and branding extension
└── vite.config.js             # Vite config
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
