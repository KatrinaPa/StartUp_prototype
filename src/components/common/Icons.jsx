import { FaDog, FaCat, FaHorse, FaPaw, FaUpload, FaSearch, FaArrowLeft, FaEdit, FaCalendarAlt, FaPlusCircle, FaUserPlus } from 'react-icons/fa';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

// Only main pet types for NewPatientPage
export const PetTypeIcons = {
  dog: FaDog,
  cat: FaCat,
  horse: FaHorse
};

// Separate icon for other types of pets
export const OtherPetIcon = FaPaw;

export const GenderIcons = {
  Male: BsGenderMale,
  Female: BsGenderFemale
};

export const ActionIcons = {
  Upload: FaUpload
};

export const SearchIcon = FaSearch;

export const BackIcon = FaArrowLeft;

export const EditIcon = FaEdit;

export const SidebarIcons = {
  Calendar: FaCalendarAlt,
  NewAppointment: FaUserPlus,
  NewPatient: FaPlusCircle,
  Patients: FaPaw,
};