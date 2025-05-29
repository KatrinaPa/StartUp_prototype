export const translatePetType = (type) => {
  const translations = {
    dog: 'Suns',
    cat: 'Kaķis',
    horse: 'Zirgs',
    bird: 'Papagailis',
    rabbit: 'Trusis',
    guineaPig: 'Cūciņa',
    other: 'Cits'
  };
  return translations[type] || type;
}; 