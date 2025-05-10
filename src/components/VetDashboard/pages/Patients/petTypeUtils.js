export const petTypeTranslations = {
  dog: 'Suns',
  cat: 'Kaķis',
  horse: 'Zirgs',
  rabbit: 'Trusis',
  bird: 'Putns',
  'guinea-pig': 'Jūrascūciņa'
}

export const translatePetType = (type) => {
  return petTypeTranslations[type] || type
} 