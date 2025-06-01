# Development Guide

## Project Folder Structure

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

## Design System & Branding

### Fonts

Roboto (400, 500, 700) from Google Fonts

### Colors

All base colors and brand colors are defined using CSS variables in index.css and mapped to Tailwind in tailwind.config.js.

### Tailwind Theme Customization

All CSS variables are injected into Tailwind via tailwind.config.js for use like:
bg-brand-yellow
text-primary
border-light

- Use Tailwind classes with these variable names instead of raw hex codes

## Styling Guidelines

### Global Styles

Use index.css to:

- Define :root CSS variables;
- Import fonts;
- Set base body styles (background color, font).

### Tailwind First

- Always prefer Tailwind classes for layout and component styling;
- Use custom variables only when Tailwind doesn't have a matching utility.

### Component-Specific Styles

- Avoid component-level CSS unless absolutely necessary;
- If needed, create a small CSS file near the component and import it (rare case).

## Component Naming & Structure

Component Type Example Location
Page Component NewPatientPage.jsx src/pages/Vets/
UI Component VetCard.jsx src/components/
Sidebar per Role SidebarVet.jsx src/pages/Vets/
Layout Wrapper DashboardLayout.jsx src/layouts
❗ Pages = route-specific screens
❗ Components = reusable elements used in pages

## Testing (TBD)

Basic testing plan will be added later, possibly using:

- Vitest
- React Testing Library

## Tooling Summary

Tool Purpose
React + Vite Main framework
TailwindCSS Styling engine
Google Fonts Roboto font
CSS Variables Theme definitions
Git Version control
