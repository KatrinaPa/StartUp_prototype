# PetMedData - Veterinary Practice Management System

## Overview

PetMedData is a web-based veterinary practice management system built with React. It is designed to help veterinarians efficiently manage patient records, appointments, and medical histories.

This project is part of a school StartUp module and is currently in development. The concept and features are undergoing idea and user validation.

**[Prototype Vercel deployment!](https://petmeddataproto-rmzdc55bz-katrinas-projects-ec4d6da8.vercel.app/)**

## Screenshots

<p>
  <img src="/src/assets/scr1.png" width="250" style="display: inline-block; margin-right: 50px;">
  <img src="/src/assets/scr2.png" width="250" style="display: inline-block; margin-right: 50px;">
  <img src="/src/assets/scr3.png" width="250" style="display: inline-block;">
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
│   │   │   ├── Appointments/
│   │   │   ├── SearchResults/
│   │   │   ├── Reports/
│   │   │   └── ...
│   │   ├── NavbarVets.jsx
│   │   └── QuickActions.jsx
│   ├── auth/
│   └── home/
├── assets/
└── App.jsx
```
