export const normalizeText = (text) => {
  if (!text) return '';
  
  return text
    .toLowerCase()
    // Replace Latvian characters with their basic Latin equivalents
    .normalize('NFKD')
    .replace(/[\u0101]/g, 'a')  // ā -> a
    .replace(/[\u0113]/g, 'e')  // ē -> e
    .replace(/[\u012B]/g, 'i')  // ī -> i
    .replace(/[\u014D]/g, 'o')  // ō -> o
    .replace(/[\u016B]/g, 'u')  // ū -> u
    .replace(/[\u0146]/g, 'n')  // ņ -> n
    .replace(/[\u0137]/g, 'k')  // ķ -> k
    .replace(/[\u013C]/g, 'l')  // ļ -> l
    .replace(/[\u0123]/g, 'g')  // ģ -> g
    .replace(/[\u010D]/g, 'c')  // č -> c
    .replace(/[\u0161]/g, 's')  // š -> s
    .replace(/[\u017E]/g, 'z')  // ž -> z
    .replace(/[^a-z0-9\s]/g, ''); // Remove any remaining diacritics
}; 