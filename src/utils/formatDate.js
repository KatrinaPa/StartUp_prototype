// this file contains the Helper functions that are used to format for example the date and time

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString();
}; 