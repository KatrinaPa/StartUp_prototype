// if any vet-specific state logic is needed, we can add it here

import { createContext, useContext, useState } from 'react';

const VetContext = createContext(null);

export const VetProvider = ({ children }) => {
  return (
    <VetContext.Provider value={{}}>
      {children}
    </VetContext.Provider>
  );
};

export const useVet = () => useContext(VetContext); 